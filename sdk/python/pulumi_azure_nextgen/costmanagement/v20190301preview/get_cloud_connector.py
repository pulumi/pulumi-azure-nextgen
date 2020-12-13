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
    'GetCloudConnectorResult',
    'AwaitableGetCloudConnectorResult',
    'get_cloud_connector',
]

@pulumi.output_type
class GetCloudConnectorResult:
    """
    The Connector model definition
    """
    def __init__(__self__, billing_model=None, collection_info=None, created_on=None, credentials_key=None, credentials_secret=None, days_trial_remaining=None, default_management_group_id=None, display_name=None, external_billing_account_id=None, id=None, kind=None, modified_on=None, name=None, provider_billing_account_display_name=None, provider_billing_account_id=None, report_id=None, status=None, subscription_id=None, type=None):
        if billing_model and not isinstance(billing_model, str):
            raise TypeError("Expected argument 'billing_model' to be a str")
        pulumi.set(__self__, "billing_model", billing_model)
        if collection_info and not isinstance(collection_info, dict):
            raise TypeError("Expected argument 'collection_info' to be a dict")
        pulumi.set(__self__, "collection_info", collection_info)
        if created_on and not isinstance(created_on, str):
            raise TypeError("Expected argument 'created_on' to be a str")
        pulumi.set(__self__, "created_on", created_on)
        if credentials_key and not isinstance(credentials_key, str):
            raise TypeError("Expected argument 'credentials_key' to be a str")
        pulumi.set(__self__, "credentials_key", credentials_key)
        if credentials_secret and not isinstance(credentials_secret, str):
            raise TypeError("Expected argument 'credentials_secret' to be a str")
        pulumi.set(__self__, "credentials_secret", credentials_secret)
        if days_trial_remaining and not isinstance(days_trial_remaining, int):
            raise TypeError("Expected argument 'days_trial_remaining' to be a int")
        pulumi.set(__self__, "days_trial_remaining", days_trial_remaining)
        if default_management_group_id and not isinstance(default_management_group_id, str):
            raise TypeError("Expected argument 'default_management_group_id' to be a str")
        pulumi.set(__self__, "default_management_group_id", default_management_group_id)
        if display_name and not isinstance(display_name, str):
            raise TypeError("Expected argument 'display_name' to be a str")
        pulumi.set(__self__, "display_name", display_name)
        if external_billing_account_id and not isinstance(external_billing_account_id, str):
            raise TypeError("Expected argument 'external_billing_account_id' to be a str")
        pulumi.set(__self__, "external_billing_account_id", external_billing_account_id)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if modified_on and not isinstance(modified_on, str):
            raise TypeError("Expected argument 'modified_on' to be a str")
        pulumi.set(__self__, "modified_on", modified_on)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if provider_billing_account_display_name and not isinstance(provider_billing_account_display_name, str):
            raise TypeError("Expected argument 'provider_billing_account_display_name' to be a str")
        pulumi.set(__self__, "provider_billing_account_display_name", provider_billing_account_display_name)
        if provider_billing_account_id and not isinstance(provider_billing_account_id, str):
            raise TypeError("Expected argument 'provider_billing_account_id' to be a str")
        pulumi.set(__self__, "provider_billing_account_id", provider_billing_account_id)
        if report_id and not isinstance(report_id, str):
            raise TypeError("Expected argument 'report_id' to be a str")
        pulumi.set(__self__, "report_id", report_id)
        if status and not isinstance(status, str):
            raise TypeError("Expected argument 'status' to be a str")
        pulumi.set(__self__, "status", status)
        if subscription_id and not isinstance(subscription_id, str):
            raise TypeError("Expected argument 'subscription_id' to be a str")
        pulumi.set(__self__, "subscription_id", subscription_id)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="billingModel")
    def billing_model(self) -> Optional[str]:
        """
        Connector billing model
        """
        return pulumi.get(self, "billing_model")

    @property
    @pulumi.getter(name="collectionInfo")
    def collection_info(self) -> 'outputs.ConnectorCollectionInfoResponse':
        """
        Collection information
        """
        return pulumi.get(self, "collection_info")

    @property
    @pulumi.getter(name="createdOn")
    def created_on(self) -> str:
        """
        Connector definition creation datetime
        """
        return pulumi.get(self, "created_on")

    @property
    @pulumi.getter(name="credentialsKey")
    def credentials_key(self) -> Optional[str]:
        """
        Credentials authentication key (eg AWS ARN)
        """
        return pulumi.get(self, "credentials_key")

    @property
    @pulumi.getter(name="credentialsSecret")
    def credentials_secret(self) -> Optional[str]:
        """
        Credentials secret (eg AWS ExternalId)
        """
        return pulumi.get(self, "credentials_secret")

    @property
    @pulumi.getter(name="daysTrialRemaining")
    def days_trial_remaining(self) -> int:
        """
        Number of days remaining of trial
        """
        return pulumi.get(self, "days_trial_remaining")

    @property
    @pulumi.getter(name="defaultManagementGroupId")
    def default_management_group_id(self) -> Optional[str]:
        """
        Default ManagementGroupId
        """
        return pulumi.get(self, "default_management_group_id")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> Optional[str]:
        """
        Connector DisplayName
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="externalBillingAccountId")
    def external_billing_account_id(self) -> str:
        """
        Associated ExternalBillingAccountId
        """
        return pulumi.get(self, "external_billing_account_id")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Connector id
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Connector kind (eg aws)
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter(name="modifiedOn")
    def modified_on(self) -> str:
        """
        Connector last modified datetime
        """
        return pulumi.get(self, "modified_on")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Connector name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="providerBillingAccountDisplayName")
    def provider_billing_account_display_name(self) -> str:
        """
        The display name of the providerBillingAccountId as defined on the external provider
        """
        return pulumi.get(self, "provider_billing_account_display_name")

    @property
    @pulumi.getter(name="providerBillingAccountId")
    def provider_billing_account_id(self) -> str:
        """
        Connector providerBillingAccountId, determined from credentials (eg AWS Consolidated account number)
        """
        return pulumi.get(self, "provider_billing_account_id")

    @property
    @pulumi.getter(name="reportId")
    def report_id(self) -> Optional[str]:
        """
        Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources)
        """
        return pulumi.get(self, "report_id")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        Connector status
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="subscriptionId")
    def subscription_id(self) -> Optional[str]:
        """
        Billing SubscriptionId
        """
        return pulumi.get(self, "subscription_id")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Connector type
        """
        return pulumi.get(self, "type")


class AwaitableGetCloudConnectorResult(GetCloudConnectorResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCloudConnectorResult(
            billing_model=self.billing_model,
            collection_info=self.collection_info,
            created_on=self.created_on,
            credentials_key=self.credentials_key,
            credentials_secret=self.credentials_secret,
            days_trial_remaining=self.days_trial_remaining,
            default_management_group_id=self.default_management_group_id,
            display_name=self.display_name,
            external_billing_account_id=self.external_billing_account_id,
            id=self.id,
            kind=self.kind,
            modified_on=self.modified_on,
            name=self.name,
            provider_billing_account_display_name=self.provider_billing_account_display_name,
            provider_billing_account_id=self.provider_billing_account_id,
            report_id=self.report_id,
            status=self.status,
            subscription_id=self.subscription_id,
            type=self.type)


def get_cloud_connector(connector_name: Optional[str] = None,
                        expand: Optional[str] = None,
                        opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetCloudConnectorResult:
    """
    Use this data source to access information about an existing resource.

    :param str connector_name: Connector Name.
    :param str expand: May be used to expand the collectionInfo property. By default, collectionInfo is not included.
    """
    __args__ = dict()
    __args__['connectorName'] = connector_name
    __args__['expand'] = expand
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:costmanagement/v20190301preview:getCloudConnector', __args__, opts=opts, typ=GetCloudConnectorResult).value

    return AwaitableGetCloudConnectorResult(
        billing_model=__ret__.billing_model,
        collection_info=__ret__.collection_info,
        created_on=__ret__.created_on,
        credentials_key=__ret__.credentials_key,
        credentials_secret=__ret__.credentials_secret,
        days_trial_remaining=__ret__.days_trial_remaining,
        default_management_group_id=__ret__.default_management_group_id,
        display_name=__ret__.display_name,
        external_billing_account_id=__ret__.external_billing_account_id,
        id=__ret__.id,
        kind=__ret__.kind,
        modified_on=__ret__.modified_on,
        name=__ret__.name,
        provider_billing_account_display_name=__ret__.provider_billing_account_display_name,
        provider_billing_account_id=__ret__.provider_billing_account_id,
        report_id=__ret__.report_id,
        status=__ret__.status,
        subscription_id=__ret__.subscription_id,
        type=__ret__.type)
