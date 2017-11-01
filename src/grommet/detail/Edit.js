import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import inflection from 'inflection';
import Title from '../layout/Title';
import {crudGetOne as crudGetOneAction, crudUpdate as crudUpdateAction} from '../../actions/dataActions';
import translate from '../../i18n/translate';
import withPermissionsFilteredChildren from '../../auth/withPermissionsFilteredChildren';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Select from 'grommet/components/Select';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';
import CloseIcon from 'grommet/components/icons/base/Close';
import EditIcon from 'grommet/components/icons/base/Edit';
import Anchor from 'grommet/components/Anchor';

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            record: props.data
        };
        this.previousKey = 0;
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({record: nextProps.data}); // FIXME: erases user entry when fetch response arrives late
            if (this.fullRefresh) {
                this.fullRefresh = false;
                this.setState({
                    key: this.state.key + 1
                });
            }
        }
        if (this.props.id !== nextProps.id || nextProps.version !== this.props.version) {
            this.updateData(nextProps.resource, nextProps.id, nextProps.include);
        }
    }

    getBasePath() {
        const {location} = this.props;
        return location
            .pathname
            .split('/')
            .slice(0, -1)
            .join('/');
    }

    defaultRedirectRoute() {
        const { hasShow } = this.props;
        if (hasShow) return 'show';
        return 'list';        
    }

    updateData(resource = this.props.resource, id = this.props.id, include = this.props.include) {
        this
            .props
            .crudGetOne(resource, id, include, this.getBasePath());
    }

    save = (record, redirect) => {
        this
            .props
            .crudUpdate(this.props.resource, this.props.id, record, this.props.data, this.getBasePath(), redirect);
    };

    render() {
        const {
            children,
            data,
            hasDelete,
            hasShow,
            hasList,
            id,
            isLoading,
            resource,
            title,
            translate,
            version,
            history,
        } = this.props;

        if (!children) 
            return null;
        
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource))
        });
        const defaultTitle = translate('aor.page.edit', {
            name: `${resourceName}`,
            id,
            data
        });
        const titleElement = data
            ? (<Title title={title} record={data} defaultTitle={defaultTitle}/>)
            : ('');

        return (
            <Article
                align="center"
                pad={{
                horizontal: 'medium'
            }}
                style={{
                opacity: isLoading
                    ? 0.8
                    : 1
            }}
                primary={true}>

                <Header size="large" justify="between" pad="none">
                    <Heading tag="h2" margin="none" strong={true}>
                        {titleElement}
                    </Heading>                    
                    <Anchor icon={< CloseIcon />} onClick={() => history.goBack()} a11yTitle='Close Form'/>
                </Header>
                {data && React.cloneElement(children, {
                    save: this.save,
                    resource,
                    basePath,
                    record: data,
                    translate,
                    version,
                    redirect: typeof children.props.redirect === 'undefined'
                        ? this.defaultRedirectRoute()
                        : children.props.redirect
                })}

            </Article>
        );
    }
}

Edit.propTypes = {
    children: PropTypes.node,
    crudGetOne: PropTypes.func.isRequired,
    crudUpdate: PropTypes.func.isRequired,
    data: PropTypes.object,
    hasDelete: PropTypes.bool,
    hasShow: PropTypes.bool,
    hasList: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    translate: PropTypes.func,
    version: PropTypes.number.isRequired
};

Edit.defaultProps = {
    include: ''
}

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin.resources[props.resource]
            ? state.admin.resources[props.resource].data[decodeURIComponent(props.match.params.id)]
            : null,
        isLoading: state.admin.loading > 0,
        version: state.admin.ui.viewVersion
    };
}

const enhance = compose(connect(mapStateToProps, {
    crudGetOne: crudGetOneAction,
    crudUpdate: crudUpdateAction
}), translate, withPermissionsFilteredChildren);

export default enhance(Edit);
