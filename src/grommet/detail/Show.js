import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import inflection from 'inflection';
import Title from '../layout/Title';
import {crudGetOne as crudGetOneAction} from '../../actions/dataActions';
import DefaultActions from './ShowActions';
import translate from '../../i18n/translate';
import withPermissionsFilteredChildren from '../../auth/withPermissionsFilteredChildren';
import Split from 'grommet/components/Split';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Notification from 'grommet/components/Notification';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import MoreIcon from 'grommet/components/icons/base/More';
import {sidebarResponsive as sidebarResponsiveAction} from '../../actions';
import Delete from '../delete/Delete';
import Sidebar from 'grommet/components/Sidebar';

export class Show extends Component {

    state = {
        showSidebarWhenSingle: false,
        deleteLayerOpen: false,
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id || nextProps.version !== this.props.version) {
            this.updateData(nextProps.resource, nextProps.id, nextProps.include);
        }
    }

    getBasePath() {
        const {location} = this.props;
        return location
            .pathname
            .split('/')
            .slice(0, -2)
            .join('/');
    }

    updateData(resource = this.props.resource, id = this.props.id, include = this.props.include) {
        this
            .props
            .crudGetOne(resource, id, include, this.getBasePath());
    }

    toggleSidebar = () => {
        this.setState({
          showSidebarWhenSingle: ! this.state.showSidebarWhenSingle
        });
      }    

     toggleDeleteLayer = () => {
        this.setState({
            deleteLayerOpen: ! this.state.deleteLayerOpen
          });
      }

    render() {
        const {
            actions = <DefaultActions/>,
            title,
            children,
            id,
            data,
            isLoading,
            resource,
            hasList,
            hasDelete,
            hasEdit,
            hasCreate,
            translate,
            sidebarResponsive,
            responsive,
        } = this.props;

        if (!children) 
            return null;
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource))
        });
        const defaultTitle = translate('aor.page.show', {
            name: `${resourceName}`,
            id,
            data
        });
        const titleElement = data
            ? (<Title title={title} record={data} defaultTitle={defaultTitle}/>)
            : ('');      

        return (
            <Split
                flex="left"
                separator={true}
                priority={this.state.showSidebarWhenSingle
                ? 'right'
                : 'left'}
                onResponsive={sidebarResponsive}>
                <div>
                    <Header
                        pad={{
                        horizontal: "small",
                        vertical: "medium"
                    }}
                        justify="between"
                        size="large"
                        colorIndex="light-2">
                        <Box
                            direction="row"
                            align="center"
                            pad={{
                            between: 'small'
                        }}
                            responsive={false}>
                            {hasList && <Anchor path={basePath}>
                                <LinkPrevious a11yTitle='Back to List'/>
                            </Anchor>}
                            <Heading margin='none' strong={true} style={{marginLeft: hasList ? 0 : 12}}>
                                {titleElement}
                            </Heading>
                        </Box>
                        {responsive === 'single' && <Button icon={<MoreIcon />} onClick={this.toggleSidebar} />}

                    </Header>
                    <Article
                        primary={true}
                        pad="medium" 
                        align="start" 
                        style={{
                        opacity: isLoading
                            ? 0.8
                            : 1
                    }}>
                        {data && React.cloneElement(children, {
                            resource,
                            basePath,
                            record: data,
                            translate
                        })}
                    </Article>
                </div>
                <Sidebar size="medium" colorIndex="light-2">
                {actions && React.cloneElement(actions, {
                    basePath,
                    data,
                    hasList,
                    hasDelete,
                    hasCreate,
                    hasEdit,
                    resource,
                    onClose: (responsive === 'single' && this.toggleSidebar),
                    onDelete: this.toggleDeleteLayer,
                    title: titleElement,
                })}    
                {hasDelete && this.state.deleteLayerOpen && <Delete {...this.props} onClose={this.toggleDeleteLayer}/>}
                </Sidebar>            
            </Split>
        );
    }
}

Show.propTypes = {
    actions: PropTypes.element,
    children: PropTypes.element,
    crudGetOne: PropTypes.func.isRequired,
    data: PropTypes.object,
    hasList: PropTypes.bool,
    hasDelete: PropTypes.bool,
    hasEdit: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    translate: PropTypes.func,
    version: PropTypes.number.isRequired
};

Show.defaultProps = {
    include: ''
}

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin.resources[props.resource]
            ? state.admin.resources[props.resource].data[decodeURIComponent(props.match.params.id)]
            : null,
        isLoading: state.admin.loading > 0,
        version: state.admin.ui.viewVersion,
        responsive: state.admin.ui.sidebarResponsive,
    };
}

const enhance = compose(connect(mapStateToProps, {crudGetOne: crudGetOneAction, sidebarResponsive: sidebarResponsiveAction}), translate, withPermissionsFilteredChildren);

export default enhance(Show);
