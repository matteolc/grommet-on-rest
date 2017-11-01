import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LayerForm from 'grommet-templates/components/LayerForm';
import Paragraph from 'grommet/components/Paragraph';
import compose from 'recompose/compose';
import inflection from 'inflection';
import Title from '../layout/Title';
import {crudGetOne as crudGetOneAction, crudDelete as crudDeleteAction} from '../../actions/dataActions';
import translate from '../../i18n/translate';

class Delete extends Component {

    //componentDidMount() {
    //    this
    //        .props
    //        .crudGetOne(this.props.resource, this.props.id, this.getBasePath());
    //}

    //componentWillReceiveProps(nextProps) {
    //    if (this.props.id !== nextProps.id) {
    //        this
    //            .props
    //            .crudGetOne(nextProps.resource, nextProps.id, this.getBasePath());
    //    }
    //}

    getBasePath() {
        const {location} = this.props;
        return location
            .pathname
            .split('/')
            .slice(0, -2)
            .join('/');
    }

    handleSubmit = (event) => {
        //event.preventDefault();
        this
            .props
            .crudDelete(this.props.resource, this.props.id, this.props.data, this.getBasePath());
        //this.props.onClose();
    }

    render() {
        const {
            title,
            id,
            data,
            isLoading,
            resource,
            translate,
            onClose,
        } = this.props;
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource))
        });
        const defaultTitle = translate('aor.page.delete', {
            name: `${resourceName}`,
            id,
            data
        });
        const titleElement = data
            ? (<Title title={title} record={data} defaultTitle={defaultTitle}/>)
            : ('');

        return (
            <LayerForm
                title="Remove"
                submitLabel="Yes, remove"
                compact={true}
                onClose={onClose}
                onSubmit={this.handleSubmit}>
                <fieldset>
                    <Paragraph>Are you sure you want to remove <strong>{titleElement}</strong>?</Paragraph>
                </fieldset>
            </LayerForm>
        );
    }
}

Delete.propTypes = {
    title: PropTypes.any,
    id: PropTypes.string.isRequired,
    resource: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    data: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    crudGetOne: PropTypes.func.isRequired,
    crudDelete: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin.resources[props.resource].data[decodeURIComponent(props.match.params.id)],
        isLoading: state.admin.loading > 0
    };
}

const enhance = compose(connect(mapStateToProps, {
    crudGetOne: crudGetOneAction,
    crudDelete: crudDeleteAction
}), translate);

export default enhance(Delete);
