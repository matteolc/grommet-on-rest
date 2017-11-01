import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {parse, stringify} from 'query-string';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {createSelector} from 'reselect';
import inflection from 'inflection';
import Title from '../layout/Title';
import { crudCreate as crudCreateAction } from '../../actions/dataActions';
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

class Create extends Component {
    getBasePath() {
        const { location } = this.props;
        return location.pathname
            .split('/')
            .slice(0, -1)
            .join('/');
    }

    defaultRedirectRoute() {
        const { hasShow, hasEdit } = this.props;
        if (hasEdit) return 'edit';
        if (hasShow) return 'show';
        return 'list';
    }

    save = (record, redirect) => {
        this.props.crudCreate(
            this.props.resource,
            record,
            this.getBasePath(),
            redirect
        );
    };

    render() {
        const {
            children,
            isLoading,
            resource,
            title,
            translate,
            hasList,
            history,
            defaultRecord,
        } = this.props;

        console.log(this.props)

        if (!children) return null;
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource)),
        });
        const defaultTitle = translate('aor.page.create', {
            name: `${resourceName}`,
        });
        const titleElement = (
            <Title title={title} defaultTitle={defaultTitle} />
        );

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
            {React.cloneElement(children, {
                save: this.save,
                resource,
                basePath,
                record: {...defaultRecord},
                translate,
                redirect:
                    typeof children.props.redirect === 'undefined'
                        ? this.defaultRedirectRoute()
                        : children.props.redirect,
            })}

        </Article>
        );
    }
}

Create.propTypes = {
    actions: PropTypes.element,
    children: PropTypes.element,
    crudCreate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    translate: PropTypes.func.isRequired,
    hasList: PropTypes.bool,
};

Create.defaultProps = {
    data: {},
};

const getLocationSearch = props => props.location.search;
const getDefaultRecord = createSelector(getLocationSearch, locationSearch => {
    return parse(locationSearch);
});

function mapStateToProps(state, props) {
    return {
        defaultRecord: getDefaultRecord(props),
        isLoading: state.admin.loading > 0,
    };
}

const enhance = compose(
    connect(mapStateToProps, { crudCreate: crudCreateAction }),
    translate,
    withPermissionsFilteredChildren
);

export default enhance(Create);
