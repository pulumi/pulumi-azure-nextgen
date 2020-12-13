# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from ._enums import *

__all__ = [
    'CreateManagementGroupDetailsArgs',
    'CreateParentGroupInfoArgs',
    'DebugSettingArgs',
    'DeploymentPropertiesArgs',
    'ExpressionEvaluationOptionsArgs',
    'OnErrorDeploymentArgs',
    'ParameterDefinitionsValueArgs',
    'ParameterDefinitionsValueMetadataArgs',
    'ParameterValuesValueArgs',
    'ParametersLinkArgs',
    'PolicyDefinitionGroupArgs',
    'PolicyDefinitionReferenceArgs',
    'TemplateLinkArgs',
]

@pulumi.input_type
class CreateManagementGroupDetailsArgs:
    def __init__(__self__, *,
                 parent: Optional[pulumi.Input['CreateParentGroupInfoArgs']] = None):
        """
        The details of a management group used during creation.
        :param pulumi.Input['CreateParentGroupInfoArgs'] parent: (Optional) The ID of the parent management group used during creation.
        """
        if parent is not None:
            pulumi.set(__self__, "parent", parent)

    @property
    @pulumi.getter
    def parent(self) -> Optional[pulumi.Input['CreateParentGroupInfoArgs']]:
        """
        (Optional) The ID of the parent management group used during creation.
        """
        return pulumi.get(self, "parent")

    @parent.setter
    def parent(self, value: Optional[pulumi.Input['CreateParentGroupInfoArgs']]):
        pulumi.set(self, "parent", value)


@pulumi.input_type
class CreateParentGroupInfoArgs:
    def __init__(__self__, *,
                 id: Optional[pulumi.Input[str]] = None):
        """
        (Optional) The ID of the parent management group used during creation.
        :param pulumi.Input[str] id: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[pulumi.Input[str]]:
        """
        The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "id", value)


@pulumi.input_type
class DebugSettingArgs:
    def __init__(__self__, *,
                 detail_level: Optional[pulumi.Input[str]] = None):
        """
        The debug setting.
        :param pulumi.Input[str] detail_level: Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.
        """
        if detail_level is not None:
            pulumi.set(__self__, "detail_level", detail_level)

    @property
    @pulumi.getter(name="detailLevel")
    def detail_level(self) -> Optional[pulumi.Input[str]]:
        """
        Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations.
        """
        return pulumi.get(self, "detail_level")

    @detail_level.setter
    def detail_level(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "detail_level", value)


@pulumi.input_type
class DeploymentPropertiesArgs:
    def __init__(__self__, *,
                 mode: pulumi.Input['DeploymentMode'],
                 debug_setting: Optional[pulumi.Input['DebugSettingArgs']] = None,
                 expression_evaluation_options: Optional[pulumi.Input['ExpressionEvaluationOptionsArgs']] = None,
                 on_error_deployment: Optional[pulumi.Input['OnErrorDeploymentArgs']] = None,
                 parameters: Optional[Any] = None,
                 parameters_link: Optional[pulumi.Input['ParametersLinkArgs']] = None,
                 template: Optional[Any] = None,
                 template_link: Optional[pulumi.Input['TemplateLinkArgs']] = None):
        """
        Deployment properties.
        :param pulumi.Input['DeploymentMode'] mode: The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
        :param pulumi.Input['DebugSettingArgs'] debug_setting: The debug setting of the deployment.
        :param pulumi.Input['ExpressionEvaluationOptionsArgs'] expression_evaluation_options: Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer.
        :param pulumi.Input['OnErrorDeploymentArgs'] on_error_deployment: The deployment on error behavior.
        :param Any parameters: Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
        :param pulumi.Input['ParametersLinkArgs'] parameters_link: The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
        :param Any template: The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
        :param pulumi.Input['TemplateLinkArgs'] template_link: The URI of the template. Use either the templateLink property or the template property, but not both.
        """
        pulumi.set(__self__, "mode", mode)
        if debug_setting is not None:
            pulumi.set(__self__, "debug_setting", debug_setting)
        if expression_evaluation_options is not None:
            pulumi.set(__self__, "expression_evaluation_options", expression_evaluation_options)
        if on_error_deployment is not None:
            pulumi.set(__self__, "on_error_deployment", on_error_deployment)
        if parameters is not None:
            pulumi.set(__self__, "parameters", parameters)
        if parameters_link is not None:
            pulumi.set(__self__, "parameters_link", parameters_link)
        if template is not None:
            pulumi.set(__self__, "template", template)
        if template_link is not None:
            pulumi.set(__self__, "template_link", template_link)

    @property
    @pulumi.getter
    def mode(self) -> pulumi.Input['DeploymentMode']:
        """
        The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
        """
        return pulumi.get(self, "mode")

    @mode.setter
    def mode(self, value: pulumi.Input['DeploymentMode']):
        pulumi.set(self, "mode", value)

    @property
    @pulumi.getter(name="debugSetting")
    def debug_setting(self) -> Optional[pulumi.Input['DebugSettingArgs']]:
        """
        The debug setting of the deployment.
        """
        return pulumi.get(self, "debug_setting")

    @debug_setting.setter
    def debug_setting(self, value: Optional[pulumi.Input['DebugSettingArgs']]):
        pulumi.set(self, "debug_setting", value)

    @property
    @pulumi.getter(name="expressionEvaluationOptions")
    def expression_evaluation_options(self) -> Optional[pulumi.Input['ExpressionEvaluationOptionsArgs']]:
        """
        Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer.
        """
        return pulumi.get(self, "expression_evaluation_options")

    @expression_evaluation_options.setter
    def expression_evaluation_options(self, value: Optional[pulumi.Input['ExpressionEvaluationOptionsArgs']]):
        pulumi.set(self, "expression_evaluation_options", value)

    @property
    @pulumi.getter(name="onErrorDeployment")
    def on_error_deployment(self) -> Optional[pulumi.Input['OnErrorDeploymentArgs']]:
        """
        The deployment on error behavior.
        """
        return pulumi.get(self, "on_error_deployment")

    @on_error_deployment.setter
    def on_error_deployment(self, value: Optional[pulumi.Input['OnErrorDeploymentArgs']]):
        pulumi.set(self, "on_error_deployment", value)

    @property
    @pulumi.getter
    def parameters(self) -> Optional[Any]:
        """
        Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string.
        """
        return pulumi.get(self, "parameters")

    @parameters.setter
    def parameters(self, value: Optional[Any]):
        pulumi.set(self, "parameters", value)

    @property
    @pulumi.getter(name="parametersLink")
    def parameters_link(self) -> Optional[pulumi.Input['ParametersLinkArgs']]:
        """
        The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both.
        """
        return pulumi.get(self, "parameters_link")

    @parameters_link.setter
    def parameters_link(self, value: Optional[pulumi.Input['ParametersLinkArgs']]):
        pulumi.set(self, "parameters_link", value)

    @property
    @pulumi.getter
    def template(self) -> Optional[Any]:
        """
        The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both.
        """
        return pulumi.get(self, "template")

    @template.setter
    def template(self, value: Optional[Any]):
        pulumi.set(self, "template", value)

    @property
    @pulumi.getter(name="templateLink")
    def template_link(self) -> Optional[pulumi.Input['TemplateLinkArgs']]:
        """
        The URI of the template. Use either the templateLink property or the template property, but not both.
        """
        return pulumi.get(self, "template_link")

    @template_link.setter
    def template_link(self, value: Optional[pulumi.Input['TemplateLinkArgs']]):
        pulumi.set(self, "template_link", value)


@pulumi.input_type
class ExpressionEvaluationOptionsArgs:
    def __init__(__self__, *,
                 scope: Optional[pulumi.Input[Union[str, 'ExpressionEvaluationOptionsScopeType']]] = None):
        """
        Specifies whether template expressions are evaluated within the scope of the parent template or nested template.
        :param pulumi.Input[Union[str, 'ExpressionEvaluationOptionsScopeType']] scope: The scope to be used for evaluation of parameters, variables and functions in a nested template.
        """
        if scope is not None:
            pulumi.set(__self__, "scope", scope)

    @property
    @pulumi.getter
    def scope(self) -> Optional[pulumi.Input[Union[str, 'ExpressionEvaluationOptionsScopeType']]]:
        """
        The scope to be used for evaluation of parameters, variables and functions in a nested template.
        """
        return pulumi.get(self, "scope")

    @scope.setter
    def scope(self, value: Optional[pulumi.Input[Union[str, 'ExpressionEvaluationOptionsScopeType']]]):
        pulumi.set(self, "scope", value)


@pulumi.input_type
class OnErrorDeploymentArgs:
    def __init__(__self__, *,
                 deployment_name: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input['OnErrorDeploymentType']] = None):
        """
        Deployment on error behavior.
        :param pulumi.Input[str] deployment_name: The deployment to be used on error case.
        :param pulumi.Input['OnErrorDeploymentType'] type: The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
        """
        if deployment_name is not None:
            pulumi.set(__self__, "deployment_name", deployment_name)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="deploymentName")
    def deployment_name(self) -> Optional[pulumi.Input[str]]:
        """
        The deployment to be used on error case.
        """
        return pulumi.get(self, "deployment_name")

    @deployment_name.setter
    def deployment_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "deployment_name", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input['OnErrorDeploymentType']]:
        """
        The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input['OnErrorDeploymentType']]):
        pulumi.set(self, "type", value)


@pulumi.input_type
class ParameterDefinitionsValueArgs:
    def __init__(__self__, *,
                 allowed_values: Optional[pulumi.Input[Sequence[Any]]] = None,
                 default_value: Optional[Any] = None,
                 metadata: Optional[pulumi.Input['ParameterDefinitionsValueMetadataArgs']] = None,
                 type: Optional[pulumi.Input[Union[str, 'ParameterType']]] = None):
        """
        The definition of a parameter that can be provided to the policy.
        :param pulumi.Input[Sequence[Any]] allowed_values: The allowed values for the parameter.
        :param Any default_value: The default value for the parameter if no value is provided.
        :param pulumi.Input['ParameterDefinitionsValueMetadataArgs'] metadata: General metadata for the parameter.
        :param pulumi.Input[Union[str, 'ParameterType']] type: The data type of the parameter.
        """
        if allowed_values is not None:
            pulumi.set(__self__, "allowed_values", allowed_values)
        if default_value is not None:
            pulumi.set(__self__, "default_value", default_value)
        if metadata is not None:
            pulumi.set(__self__, "metadata", metadata)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="allowedValues")
    def allowed_values(self) -> Optional[pulumi.Input[Sequence[Any]]]:
        """
        The allowed values for the parameter.
        """
        return pulumi.get(self, "allowed_values")

    @allowed_values.setter
    def allowed_values(self, value: Optional[pulumi.Input[Sequence[Any]]]):
        pulumi.set(self, "allowed_values", value)

    @property
    @pulumi.getter(name="defaultValue")
    def default_value(self) -> Optional[Any]:
        """
        The default value for the parameter if no value is provided.
        """
        return pulumi.get(self, "default_value")

    @default_value.setter
    def default_value(self, value: Optional[Any]):
        pulumi.set(self, "default_value", value)

    @property
    @pulumi.getter
    def metadata(self) -> Optional[pulumi.Input['ParameterDefinitionsValueMetadataArgs']]:
        """
        General metadata for the parameter.
        """
        return pulumi.get(self, "metadata")

    @metadata.setter
    def metadata(self, value: Optional[pulumi.Input['ParameterDefinitionsValueMetadataArgs']]):
        pulumi.set(self, "metadata", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[Union[str, 'ParameterType']]]:
        """
        The data type of the parameter.
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[Union[str, 'ParameterType']]]):
        pulumi.set(self, "type", value)


@pulumi.input_type
class ParameterDefinitionsValueMetadataArgs:
    def __init__(__self__, *,
                 assign_permissions: Optional[pulumi.Input[bool]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 display_name: Optional[pulumi.Input[str]] = None,
                 strong_type: Optional[pulumi.Input[str]] = None):
        """
        General metadata for the parameter.
        :param pulumi.Input[bool] assign_permissions: Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
        :param pulumi.Input[str] description: The description of the parameter.
        :param pulumi.Input[str] display_name: The display name for the parameter.
        :param pulumi.Input[str] strong_type: Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
        """
        if assign_permissions is not None:
            pulumi.set(__self__, "assign_permissions", assign_permissions)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if display_name is not None:
            pulumi.set(__self__, "display_name", display_name)
        if strong_type is not None:
            pulumi.set(__self__, "strong_type", strong_type)

    @property
    @pulumi.getter(name="assignPermissions")
    def assign_permissions(self) -> Optional[pulumi.Input[bool]]:
        """
        Set to true to have Azure portal create role assignments on the resource ID or resource scope value of this parameter during policy assignment. This property is useful in case you wish to assign permissions outside the assignment scope.
        """
        return pulumi.get(self, "assign_permissions")

    @assign_permissions.setter
    def assign_permissions(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "assign_permissions", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        The description of the parameter.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[pulumi.Input[str]]:
        """
        The display name for the parameter.
        """
        return pulumi.get(self, "display_name")

    @display_name.setter
    def display_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "display_name", value)

    @property
    @pulumi.getter(name="strongType")
    def strong_type(self) -> Optional[pulumi.Input[str]]:
        """
        Used when assigning the policy definition through the portal. Provides a context aware list of values for the user to choose from.
        """
        return pulumi.get(self, "strong_type")

    @strong_type.setter
    def strong_type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "strong_type", value)


@pulumi.input_type
class ParameterValuesValueArgs:
    def __init__(__self__, *,
                 value: Optional[Any] = None):
        """
        The value of a parameter.
        :param Any value: The value of the parameter.
        """
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def value(self) -> Optional[Any]:
        """
        The value of the parameter.
        """
        return pulumi.get(self, "value")

    @value.setter
    def value(self, value: Optional[Any]):
        pulumi.set(self, "value", value)


@pulumi.input_type
class ParametersLinkArgs:
    def __init__(__self__, *,
                 uri: pulumi.Input[str],
                 content_version: Optional[pulumi.Input[str]] = None):
        """
        Entity representing the reference to the deployment parameters.
        :param pulumi.Input[str] uri: The URI of the parameters file.
        :param pulumi.Input[str] content_version: If included, must match the ContentVersion in the template.
        """
        pulumi.set(__self__, "uri", uri)
        if content_version is not None:
            pulumi.set(__self__, "content_version", content_version)

    @property
    @pulumi.getter
    def uri(self) -> pulumi.Input[str]:
        """
        The URI of the parameters file.
        """
        return pulumi.get(self, "uri")

    @uri.setter
    def uri(self, value: pulumi.Input[str]):
        pulumi.set(self, "uri", value)

    @property
    @pulumi.getter(name="contentVersion")
    def content_version(self) -> Optional[pulumi.Input[str]]:
        """
        If included, must match the ContentVersion in the template.
        """
        return pulumi.get(self, "content_version")

    @content_version.setter
    def content_version(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "content_version", value)


@pulumi.input_type
class PolicyDefinitionGroupArgs:
    def __init__(__self__, *,
                 name: pulumi.Input[str],
                 additional_metadata_id: Optional[pulumi.Input[str]] = None,
                 category: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 display_name: Optional[pulumi.Input[str]] = None):
        """
        The policy definition group.
        :param pulumi.Input[str] name: The name of the group.
        :param pulumi.Input[str] additional_metadata_id: A resource ID of a resource that contains additional metadata about the group.
        :param pulumi.Input[str] category: The group's category.
        :param pulumi.Input[str] description: The group's description.
        :param pulumi.Input[str] display_name: The group's display name.
        """
        pulumi.set(__self__, "name", name)
        if additional_metadata_id is not None:
            pulumi.set(__self__, "additional_metadata_id", additional_metadata_id)
        if category is not None:
            pulumi.set(__self__, "category", category)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if display_name is not None:
            pulumi.set(__self__, "display_name", display_name)

    @property
    @pulumi.getter
    def name(self) -> pulumi.Input[str]:
        """
        The name of the group.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: pulumi.Input[str]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="additionalMetadataId")
    def additional_metadata_id(self) -> Optional[pulumi.Input[str]]:
        """
        A resource ID of a resource that contains additional metadata about the group.
        """
        return pulumi.get(self, "additional_metadata_id")

    @additional_metadata_id.setter
    def additional_metadata_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "additional_metadata_id", value)

    @property
    @pulumi.getter
    def category(self) -> Optional[pulumi.Input[str]]:
        """
        The group's category.
        """
        return pulumi.get(self, "category")

    @category.setter
    def category(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "category", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        The group's description.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[pulumi.Input[str]]:
        """
        The group's display name.
        """
        return pulumi.get(self, "display_name")

    @display_name.setter
    def display_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "display_name", value)


@pulumi.input_type
class PolicyDefinitionReferenceArgs:
    def __init__(__self__, *,
                 policy_definition_id: pulumi.Input[str],
                 group_names: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input['ParameterValuesValueArgs']]]] = None,
                 policy_definition_reference_id: Optional[pulumi.Input[str]] = None):
        """
        The policy definition reference.
        :param pulumi.Input[str] policy_definition_id: The ID of the policy definition or policy set definition.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] group_names: The name of the groups that this policy definition reference belongs to.
        :param pulumi.Input[Mapping[str, pulumi.Input['ParameterValuesValueArgs']]] parameters: The parameter values for the referenced policy rule. The keys are the parameter names.
        :param pulumi.Input[str] policy_definition_reference_id: A unique id (within the policy set definition) for this policy definition reference.
        """
        pulumi.set(__self__, "policy_definition_id", policy_definition_id)
        if group_names is not None:
            pulumi.set(__self__, "group_names", group_names)
        if parameters is not None:
            pulumi.set(__self__, "parameters", parameters)
        if policy_definition_reference_id is not None:
            pulumi.set(__self__, "policy_definition_reference_id", policy_definition_reference_id)

    @property
    @pulumi.getter(name="policyDefinitionId")
    def policy_definition_id(self) -> pulumi.Input[str]:
        """
        The ID of the policy definition or policy set definition.
        """
        return pulumi.get(self, "policy_definition_id")

    @policy_definition_id.setter
    def policy_definition_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "policy_definition_id", value)

    @property
    @pulumi.getter(name="groupNames")
    def group_names(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        The name of the groups that this policy definition reference belongs to.
        """
        return pulumi.get(self, "group_names")

    @group_names.setter
    def group_names(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "group_names", value)

    @property
    @pulumi.getter
    def parameters(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input['ParameterValuesValueArgs']]]]:
        """
        The parameter values for the referenced policy rule. The keys are the parameter names.
        """
        return pulumi.get(self, "parameters")

    @parameters.setter
    def parameters(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input['ParameterValuesValueArgs']]]]):
        pulumi.set(self, "parameters", value)

    @property
    @pulumi.getter(name="policyDefinitionReferenceId")
    def policy_definition_reference_id(self) -> Optional[pulumi.Input[str]]:
        """
        A unique id (within the policy set definition) for this policy definition reference.
        """
        return pulumi.get(self, "policy_definition_reference_id")

    @policy_definition_reference_id.setter
    def policy_definition_reference_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "policy_definition_reference_id", value)


@pulumi.input_type
class TemplateLinkArgs:
    def __init__(__self__, *,
                 content_version: Optional[pulumi.Input[str]] = None,
                 id: Optional[pulumi.Input[str]] = None,
                 query_string: Optional[pulumi.Input[str]] = None,
                 relative_path: Optional[pulumi.Input[str]] = None,
                 uri: Optional[pulumi.Input[str]] = None):
        """
        Entity representing the reference to the template.
        :param pulumi.Input[str] content_version: If included, must match the ContentVersion in the template.
        :param pulumi.Input[str] id: The resource id of a Template Spec. Use either the id or uri property, but not both.
        :param pulumi.Input[str] query_string: The query string (for example, a SAS token) to be used with the templateLink URI.
        :param pulumi.Input[str] relative_path: The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
        :param pulumi.Input[str] uri: The URI of the template to deploy. Use either the uri or id property, but not both.
        """
        if content_version is not None:
            pulumi.set(__self__, "content_version", content_version)
        if id is not None:
            pulumi.set(__self__, "id", id)
        if query_string is not None:
            pulumi.set(__self__, "query_string", query_string)
        if relative_path is not None:
            pulumi.set(__self__, "relative_path", relative_path)
        if uri is not None:
            pulumi.set(__self__, "uri", uri)

    @property
    @pulumi.getter(name="contentVersion")
    def content_version(self) -> Optional[pulumi.Input[str]]:
        """
        If included, must match the ContentVersion in the template.
        """
        return pulumi.get(self, "content_version")

    @content_version.setter
    def content_version(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "content_version", value)

    @property
    @pulumi.getter
    def id(self) -> Optional[pulumi.Input[str]]:
        """
        The resource id of a Template Spec. Use either the id or uri property, but not both.
        """
        return pulumi.get(self, "id")

    @id.setter
    def id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "id", value)

    @property
    @pulumi.getter(name="queryString")
    def query_string(self) -> Optional[pulumi.Input[str]]:
        """
        The query string (for example, a SAS token) to be used with the templateLink URI.
        """
        return pulumi.get(self, "query_string")

    @query_string.setter
    def query_string(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "query_string", value)

    @property
    @pulumi.getter(name="relativePath")
    def relative_path(self) -> Optional[pulumi.Input[str]]:
        """
        The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs
        """
        return pulumi.get(self, "relative_path")

    @relative_path.setter
    def relative_path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "relative_path", value)

    @property
    @pulumi.getter
    def uri(self) -> Optional[pulumi.Input[str]]:
        """
        The URI of the template to deploy. Use either the uri or id property, but not both.
        """
        return pulumi.get(self, "uri")

    @uri.setter
    def uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "uri", value)


