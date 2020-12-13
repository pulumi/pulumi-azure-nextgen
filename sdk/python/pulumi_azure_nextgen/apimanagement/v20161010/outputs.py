# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._enums import *

__all__ = [
    'AdditionalRegionResponse',
    'ApiManagementServiceSkuPropertiesResponse',
    'CertificateInformationResponse',
    'HostnameConfigurationResponse',
    'VirtualNetworkConfigurationResponse',
]

@pulumi.output_type
class AdditionalRegionResponse(dict):
    """
    Description of an additional API Management resource location.
    """
    def __init__(__self__, *,
                 location: str,
                 sku_type: str,
                 static_ips: Sequence[str],
                 sku_unit_count: Optional[int] = None,
                 vpnconfiguration: Optional['outputs.VirtualNetworkConfigurationResponse'] = None):
        """
        Description of an additional API Management resource location.
        :param str location: The location name of the additional region among Azure Data center regions.
        :param str sku_type: The SKU type in the location.
        :param Sequence[str] static_ips: Static IP addresses of the location's virtual machines.
        :param int sku_unit_count: The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
        :param 'VirtualNetworkConfigurationResponseArgs' vpnconfiguration: Virtual network configuration for the location.
        """
        pulumi.set(__self__, "location", location)
        pulumi.set(__self__, "sku_type", sku_type)
        pulumi.set(__self__, "static_ips", static_ips)
        if sku_unit_count is not None:
            pulumi.set(__self__, "sku_unit_count", sku_unit_count)
        if vpnconfiguration is not None:
            pulumi.set(__self__, "vpnconfiguration", vpnconfiguration)

    @property
    @pulumi.getter
    def location(self) -> str:
        """
        The location name of the additional region among Azure Data center regions.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="skuType")
    def sku_type(self) -> str:
        """
        The SKU type in the location.
        """
        return pulumi.get(self, "sku_type")

    @property
    @pulumi.getter(name="staticIPs")
    def static_ips(self) -> Sequence[str]:
        """
        Static IP addresses of the location's virtual machines.
        """
        return pulumi.get(self, "static_ips")

    @property
    @pulumi.getter(name="skuUnitCount")
    def sku_unit_count(self) -> Optional[int]:
        """
        The SKU Unit count at the location. The maximum SKU Unit count depends on the SkuType. Maximum allowed for Developer SKU is 1, for Standard SKU is 4, and for Premium SKU is 10, at a location.
        """
        return pulumi.get(self, "sku_unit_count")

    @property
    @pulumi.getter
    def vpnconfiguration(self) -> Optional['outputs.VirtualNetworkConfigurationResponse']:
        """
        Virtual network configuration for the location.
        """
        return pulumi.get(self, "vpnconfiguration")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ApiManagementServiceSkuPropertiesResponse(dict):
    """
    API Management service resource SKU properties.
    """
    def __init__(__self__, *,
                 name: str,
                 capacity: Optional[int] = None):
        """
        API Management service resource SKU properties.
        :param str name: Name of the Sku.
        :param int capacity: Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
        """
        pulumi.set(__self__, "name", name)
        if capacity is not None:
            pulumi.set(__self__, "capacity", capacity)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Name of the Sku.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def capacity(self) -> Optional[int]:
        """
        Capacity of the SKU (number of deployed units of the SKU). The default value is 1.
        """
        return pulumi.get(self, "capacity")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CertificateInformationResponse(dict):
    """
    SSL certificate information.
    """
    def __init__(__self__, *,
                 expiry: str,
                 subject: str,
                 thumbprint: str):
        """
        SSL certificate information.
        :param str expiry: Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        :param str subject: Subject of the certificate.
        :param str thumbprint: Thumbprint of the certificate.
        """
        pulumi.set(__self__, "expiry", expiry)
        pulumi.set(__self__, "subject", subject)
        pulumi.set(__self__, "thumbprint", thumbprint)

    @property
    @pulumi.getter
    def expiry(self) -> str:
        """
        Expiration date of the certificate. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        """
        return pulumi.get(self, "expiry")

    @property
    @pulumi.getter
    def subject(self) -> str:
        """
        Subject of the certificate.
        """
        return pulumi.get(self, "subject")

    @property
    @pulumi.getter
    def thumbprint(self) -> str:
        """
        Thumbprint of the certificate.
        """
        return pulumi.get(self, "thumbprint")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class HostnameConfigurationResponse(dict):
    """
    Custom hostname configuration.
    """
    def __init__(__self__, *,
                 certificate: 'outputs.CertificateInformationResponse',
                 hostname: str,
                 type: str):
        """
        Custom hostname configuration.
        :param 'CertificateInformationResponseArgs' certificate: Certificate information.
        :param str hostname: Hostname.
        :param str type: Hostname type.
        """
        pulumi.set(__self__, "certificate", certificate)
        pulumi.set(__self__, "hostname", hostname)
        pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def certificate(self) -> 'outputs.CertificateInformationResponse':
        """
        Certificate information.
        """
        return pulumi.get(self, "certificate")

    @property
    @pulumi.getter
    def hostname(self) -> str:
        """
        Hostname.
        """
        return pulumi.get(self, "hostname")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Hostname type.
        """
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VirtualNetworkConfigurationResponse(dict):
    """
    Configuration of a virtual network to which API Management service is deployed.
    """
    def __init__(__self__, *,
                 subnetname: str,
                 vnetid: str,
                 location: Optional[str] = None,
                 subnet_resource_id: Optional[str] = None):
        """
        Configuration of a virtual network to which API Management service is deployed.
        :param str subnetname: The name of the subnet.
        :param str vnetid: The virtual network ID. This is typically a GUID. Expect a null GUID by default.
        :param str location: The location of the virtual network.
        :param str subnet_resource_id: The full resource ID of a subnet in a virtual network to deploy the API Management service in.
        """
        pulumi.set(__self__, "subnetname", subnetname)
        pulumi.set(__self__, "vnetid", vnetid)
        if location is not None:
            pulumi.set(__self__, "location", location)
        if subnet_resource_id is not None:
            pulumi.set(__self__, "subnet_resource_id", subnet_resource_id)

    @property
    @pulumi.getter
    def subnetname(self) -> str:
        """
        The name of the subnet.
        """
        return pulumi.get(self, "subnetname")

    @property
    @pulumi.getter
    def vnetid(self) -> str:
        """
        The virtual network ID. This is typically a GUID. Expect a null GUID by default.
        """
        return pulumi.get(self, "vnetid")

    @property
    @pulumi.getter
    def location(self) -> Optional[str]:
        """
        The location of the virtual network.
        """
        return pulumi.get(self, "location")

    @property
    @pulumi.getter(name="subnetResourceId")
    def subnet_resource_id(self) -> Optional[str]:
        """
        The full resource ID of a subnet in a virtual network to deploy the API Management service in.
        """
        return pulumi.get(self, "subnet_resource_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


