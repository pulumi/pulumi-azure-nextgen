# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetRemediationAtResourceGroupResult',
    'AwaitableGetRemediationAtResourceGroupResult',
    'get_remediation_at_resource_group',
]

@pulumi.output_type
class GetRemediationAtResourceGroupResult:
    """
    The remediation definition.
    """
    def __init__(__self__, created_on=None, deployment_status=None, filters=None, id=None, last_updated_on=None, name=None, policy_assignment_id=None, policy_definition_reference_id=None, provisioning_state=None, type=None):
        if created_on and not isinstance(created_on, str):
            raise TypeError("Expected argument 'created_on' to be a str")
        pulumi.set(__self__, "created_on", created_on)
        if deployment_status and not isinstance(deployment_status, dict):
            raise TypeError("Expected argument 'deployment_status' to be a dict")
        pulumi.set(__self__, "deployment_status", deployment_status)
        if filters and not isinstance(filters, dict):
            raise TypeError("Expected argument 'filters' to be a dict")
        pulumi.set(__self__, "filters", filters)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if last_updated_on and not isinstance(last_updated_on, str):
            raise TypeError("Expected argument 'last_updated_on' to be a str")
        pulumi.set(__self__, "last_updated_on", last_updated_on)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if policy_assignment_id and not isinstance(policy_assignment_id, str):
            raise TypeError("Expected argument 'policy_assignment_id' to be a str")
        pulumi.set(__self__, "policy_assignment_id", policy_assignment_id)
        if policy_definition_reference_id and not isinstance(policy_definition_reference_id, str):
            raise TypeError("Expected argument 'policy_definition_reference_id' to be a str")
        pulumi.set(__self__, "policy_definition_reference_id", policy_definition_reference_id)
        if provisioning_state and not isinstance(provisioning_state, str):
            raise TypeError("Expected argument 'provisioning_state' to be a str")
        pulumi.set(__self__, "provisioning_state", provisioning_state)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="createdOn")
    def created_on(self) -> str:
        """
        The time at which the remediation was created.
        """
        return pulumi.get(self, "created_on")

    @property
    @pulumi.getter(name="deploymentStatus")
    def deployment_status(self) -> Optional['outputs.RemediationDeploymentSummaryResponse']:
        """
        The deployment status summary for all deployments created by the remediation.
        """
        return pulumi.get(self, "deployment_status")

    @property
    @pulumi.getter
    def filters(self) -> Optional['outputs.RemediationFiltersResponse']:
        """
        The filters that will be applied to determine which resources to remediate.
        """
        return pulumi.get(self, "filters")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The ID of the remediation.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="lastUpdatedOn")
    def last_updated_on(self) -> str:
        """
        The time at which the remediation was last updated.
        """
        return pulumi.get(self, "last_updated_on")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the remediation.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="policyAssignmentId")
    def policy_assignment_id(self) -> Optional[str]:
        """
        The resource ID of the policy assignment that should be remediated.
        """
        return pulumi.get(self, "policy_assignment_id")

    @property
    @pulumi.getter(name="policyDefinitionReferenceId")
    def policy_definition_reference_id(self) -> Optional[str]:
        """
        The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
        """
        return pulumi.get(self, "policy_definition_reference_id")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> str:
        """
        The status of the remediation.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the remediation.
        """
        return pulumi.get(self, "type")


class AwaitableGetRemediationAtResourceGroupResult(GetRemediationAtResourceGroupResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetRemediationAtResourceGroupResult(
            created_on=self.created_on,
            deployment_status=self.deployment_status,
            filters=self.filters,
            id=self.id,
            last_updated_on=self.last_updated_on,
            name=self.name,
            policy_assignment_id=self.policy_assignment_id,
            policy_definition_reference_id=self.policy_definition_reference_id,
            provisioning_state=self.provisioning_state,
            type=self.type)


def get_remediation_at_resource_group(remediation_name: Optional[str] = None,
                                      resource_group_name: Optional[str] = None,
                                      opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetRemediationAtResourceGroupResult:
    """
    Use this data source to access information about an existing resource.

    :param str remediation_name: The name of the remediation.
    :param str resource_group_name: Resource group name.
    """
    __args__ = dict()
    __args__['remediationName'] = remediation_name
    __args__['resourceGroupName'] = resource_group_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:policyinsights/v20180701preview:getRemediationAtResourceGroup', __args__, opts=opts, typ=GetRemediationAtResourceGroupResult).value

    return AwaitableGetRemediationAtResourceGroupResult(
        created_on=__ret__.created_on,
        deployment_status=__ret__.deployment_status,
        filters=__ret__.filters,
        id=__ret__.id,
        last_updated_on=__ret__.last_updated_on,
        name=__ret__.name,
        policy_assignment_id=__ret__.policy_assignment_id,
        policy_definition_reference_id=__ret__.policy_definition_reference_id,
        provisioning_state=__ret__.provisioning_state,
        type=__ret__.type)
