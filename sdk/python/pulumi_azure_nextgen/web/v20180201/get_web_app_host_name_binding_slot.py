# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables

__all__ = [
    'GetWebAppHostNameBindingSlotResult',
    'AwaitableGetWebAppHostNameBindingSlotResult',
    'get_web_app_host_name_binding_slot',
]

@pulumi.output_type
class GetWebAppHostNameBindingSlotResult:
    """
    A hostname binding object.
    """
    def __init__(__self__, azure_resource_name=None, azure_resource_type=None, custom_host_name_dns_record_type=None, domain_id=None, host_name_type=None, id=None, kind=None, name=None, site_name=None, ssl_state=None, thumbprint=None, type=None, virtual_ip=None):
        if azure_resource_name and not isinstance(azure_resource_name, str):
            raise TypeError("Expected argument 'azure_resource_name' to be a str")
        pulumi.set(__self__, "azure_resource_name", azure_resource_name)
        if azure_resource_type and not isinstance(azure_resource_type, str):
            raise TypeError("Expected argument 'azure_resource_type' to be a str")
        pulumi.set(__self__, "azure_resource_type", azure_resource_type)
        if custom_host_name_dns_record_type and not isinstance(custom_host_name_dns_record_type, str):
            raise TypeError("Expected argument 'custom_host_name_dns_record_type' to be a str")
        pulumi.set(__self__, "custom_host_name_dns_record_type", custom_host_name_dns_record_type)
        if domain_id and not isinstance(domain_id, str):
            raise TypeError("Expected argument 'domain_id' to be a str")
        pulumi.set(__self__, "domain_id", domain_id)
        if host_name_type and not isinstance(host_name_type, str):
            raise TypeError("Expected argument 'host_name_type' to be a str")
        pulumi.set(__self__, "host_name_type", host_name_type)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if kind and not isinstance(kind, str):
            raise TypeError("Expected argument 'kind' to be a str")
        pulumi.set(__self__, "kind", kind)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if site_name and not isinstance(site_name, str):
            raise TypeError("Expected argument 'site_name' to be a str")
        pulumi.set(__self__, "site_name", site_name)
        if ssl_state and not isinstance(ssl_state, str):
            raise TypeError("Expected argument 'ssl_state' to be a str")
        pulumi.set(__self__, "ssl_state", ssl_state)
        if thumbprint and not isinstance(thumbprint, str):
            raise TypeError("Expected argument 'thumbprint' to be a str")
        pulumi.set(__self__, "thumbprint", thumbprint)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if virtual_ip and not isinstance(virtual_ip, str):
            raise TypeError("Expected argument 'virtual_ip' to be a str")
        pulumi.set(__self__, "virtual_ip", virtual_ip)

    @property
    @pulumi.getter(name="azureResourceName")
    def azure_resource_name(self) -> Optional[str]:
        """
        Azure resource name.
        """
        return pulumi.get(self, "azure_resource_name")

    @property
    @pulumi.getter(name="azureResourceType")
    def azure_resource_type(self) -> Optional[str]:
        """
        Azure resource type.
        """
        return pulumi.get(self, "azure_resource_type")

    @property
    @pulumi.getter(name="customHostNameDnsRecordType")
    def custom_host_name_dns_record_type(self) -> Optional[str]:
        """
        Custom DNS record type.
        """
        return pulumi.get(self, "custom_host_name_dns_record_type")

    @property
    @pulumi.getter(name="domainId")
    def domain_id(self) -> Optional[str]:
        """
        Fully qualified ARM domain resource URI.
        """
        return pulumi.get(self, "domain_id")

    @property
    @pulumi.getter(name="hostNameType")
    def host_name_type(self) -> Optional[str]:
        """
        Hostname type.
        """
        return pulumi.get(self, "host_name_type")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource Id.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def kind(self) -> Optional[str]:
        """
        Kind of resource.
        """
        return pulumi.get(self, "kind")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource Name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="siteName")
    def site_name(self) -> Optional[str]:
        """
        App Service app name.
        """
        return pulumi.get(self, "site_name")

    @property
    @pulumi.getter(name="sslState")
    def ssl_state(self) -> Optional[str]:
        """
        SSL type
        """
        return pulumi.get(self, "ssl_state")

    @property
    @pulumi.getter
    def thumbprint(self) -> Optional[str]:
        """
        SSL certificate thumbprint
        """
        return pulumi.get(self, "thumbprint")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="virtualIP")
    def virtual_ip(self) -> str:
        """
        Virtual IP address assigned to the hostname if IP based SSL is enabled.
        """
        return pulumi.get(self, "virtual_ip")


class AwaitableGetWebAppHostNameBindingSlotResult(GetWebAppHostNameBindingSlotResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetWebAppHostNameBindingSlotResult(
            azure_resource_name=self.azure_resource_name,
            azure_resource_type=self.azure_resource_type,
            custom_host_name_dns_record_type=self.custom_host_name_dns_record_type,
            domain_id=self.domain_id,
            host_name_type=self.host_name_type,
            id=self.id,
            kind=self.kind,
            name=self.name,
            site_name=self.site_name,
            ssl_state=self.ssl_state,
            thumbprint=self.thumbprint,
            type=self.type,
            virtual_ip=self.virtual_ip)


def get_web_app_host_name_binding_slot(host_name: Optional[str] = None,
                                       name: Optional[str] = None,
                                       resource_group_name: Optional[str] = None,
                                       slot: Optional[str] = None,
                                       opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetWebAppHostNameBindingSlotResult:
    """
    Use this data source to access information about an existing resource.

    :param str host_name: Hostname in the hostname binding.
    :param str name: Name of the app.
    :param str resource_group_name: Name of the resource group to which the resource belongs.
    :param str slot: Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
    """
    __args__ = dict()
    __args__['hostName'] = host_name
    __args__['name'] = name
    __args__['resourceGroupName'] = resource_group_name
    __args__['slot'] = slot
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:web/v20180201:getWebAppHostNameBindingSlot', __args__, opts=opts, typ=GetWebAppHostNameBindingSlotResult).value

    return AwaitableGetWebAppHostNameBindingSlotResult(
        azure_resource_name=__ret__.azure_resource_name,
        azure_resource_type=__ret__.azure_resource_type,
        custom_host_name_dns_record_type=__ret__.custom_host_name_dns_record_type,
        domain_id=__ret__.domain_id,
        host_name_type=__ret__.host_name_type,
        id=__ret__.id,
        kind=__ret__.kind,
        name=__ret__.name,
        site_name=__ret__.site_name,
        ssl_state=__ret__.ssl_state,
        thumbprint=__ret__.thumbprint,
        type=__ret__.type,
        virtual_ip=__ret__.virtual_ip)
