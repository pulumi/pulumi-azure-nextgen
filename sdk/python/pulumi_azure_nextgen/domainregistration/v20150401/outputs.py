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
    'AddressResponse',
    'ContactResponse',
    'DomainPurchaseConsentResponse',
    'HostNameResponse',
    'NameIdentifierResponseResult',
    'TldLegalAgreementResponseResult',
]

@pulumi.output_type
class AddressResponse(dict):
    """
    Address information for domain registration.
    """
    def __init__(__self__, *,
                 address1: str,
                 city: str,
                 country: str,
                 postal_code: str,
                 state: str,
                 address2: Optional[str] = None):
        """
        Address information for domain registration.
        :param str address1: First line of an Address.
        :param str city: The city for the address.
        :param str country: The country for the address.
        :param str postal_code: The postal code for the address.
        :param str state: The state or province for the address.
        :param str address2: The second line of the Address. Optional.
        """
        pulumi.set(__self__, "address1", address1)
        pulumi.set(__self__, "city", city)
        pulumi.set(__self__, "country", country)
        pulumi.set(__self__, "postal_code", postal_code)
        pulumi.set(__self__, "state", state)
        if address2 is not None:
            pulumi.set(__self__, "address2", address2)

    @property
    @pulumi.getter
    def address1(self) -> str:
        """
        First line of an Address.
        """
        return pulumi.get(self, "address1")

    @property
    @pulumi.getter
    def city(self) -> str:
        """
        The city for the address.
        """
        return pulumi.get(self, "city")

    @property
    @pulumi.getter
    def country(self) -> str:
        """
        The country for the address.
        """
        return pulumi.get(self, "country")

    @property
    @pulumi.getter(name="postalCode")
    def postal_code(self) -> str:
        """
        The postal code for the address.
        """
        return pulumi.get(self, "postal_code")

    @property
    @pulumi.getter
    def state(self) -> str:
        """
        The state or province for the address.
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter
    def address2(self) -> Optional[str]:
        """
        The second line of the Address. Optional.
        """
        return pulumi.get(self, "address2")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ContactResponse(dict):
    """
    Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois 
    directories as per ICANN requirements.
    """
    def __init__(__self__, *,
                 email: str,
                 name_first: str,
                 name_last: str,
                 phone: str,
                 address_mailing: Optional['outputs.AddressResponse'] = None,
                 fax: Optional[str] = None,
                 job_title: Optional[str] = None,
                 name_middle: Optional[str] = None,
                 organization: Optional[str] = None):
        """
        Contact information for domain registration. If 'Domain Privacy' option is not selected then the contact information is made publicly available through the Whois 
        directories as per ICANN requirements.
        :param str email: Email address.
        :param str name_first: First name.
        :param str name_last: Last name.
        :param str phone: Phone number.
        :param 'AddressResponseArgs' address_mailing: Mailing address.
        :param str fax: Fax number.
        :param str job_title: Job title.
        :param str name_middle: Middle name.
        :param str organization: Organization contact belongs to.
        """
        pulumi.set(__self__, "email", email)
        pulumi.set(__self__, "name_first", name_first)
        pulumi.set(__self__, "name_last", name_last)
        pulumi.set(__self__, "phone", phone)
        if address_mailing is not None:
            pulumi.set(__self__, "address_mailing", address_mailing)
        if fax is not None:
            pulumi.set(__self__, "fax", fax)
        if job_title is not None:
            pulumi.set(__self__, "job_title", job_title)
        if name_middle is not None:
            pulumi.set(__self__, "name_middle", name_middle)
        if organization is not None:
            pulumi.set(__self__, "organization", organization)

    @property
    @pulumi.getter
    def email(self) -> str:
        """
        Email address.
        """
        return pulumi.get(self, "email")

    @property
    @pulumi.getter(name="nameFirst")
    def name_first(self) -> str:
        """
        First name.
        """
        return pulumi.get(self, "name_first")

    @property
    @pulumi.getter(name="nameLast")
    def name_last(self) -> str:
        """
        Last name.
        """
        return pulumi.get(self, "name_last")

    @property
    @pulumi.getter
    def phone(self) -> str:
        """
        Phone number.
        """
        return pulumi.get(self, "phone")

    @property
    @pulumi.getter(name="addressMailing")
    def address_mailing(self) -> Optional['outputs.AddressResponse']:
        """
        Mailing address.
        """
        return pulumi.get(self, "address_mailing")

    @property
    @pulumi.getter
    def fax(self) -> Optional[str]:
        """
        Fax number.
        """
        return pulumi.get(self, "fax")

    @property
    @pulumi.getter(name="jobTitle")
    def job_title(self) -> Optional[str]:
        """
        Job title.
        """
        return pulumi.get(self, "job_title")

    @property
    @pulumi.getter(name="nameMiddle")
    def name_middle(self) -> Optional[str]:
        """
        Middle name.
        """
        return pulumi.get(self, "name_middle")

    @property
    @pulumi.getter
    def organization(self) -> Optional[str]:
        """
        Organization contact belongs to.
        """
        return pulumi.get(self, "organization")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DomainPurchaseConsentResponse(dict):
    """
    Domain purchase consent object, representing acceptance of applicable legal agreements.
    """
    def __init__(__self__, *,
                 agreed_at: Optional[str] = None,
                 agreed_by: Optional[str] = None,
                 agreement_keys: Optional[Sequence[str]] = None):
        """
        Domain purchase consent object, representing acceptance of applicable legal agreements.
        :param str agreed_at: Timestamp when the agreements were accepted.
        :param str agreed_by: Client IP address.
        :param Sequence[str] agreement_keys: List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource.
        """
        if agreed_at is not None:
            pulumi.set(__self__, "agreed_at", agreed_at)
        if agreed_by is not None:
            pulumi.set(__self__, "agreed_by", agreed_by)
        if agreement_keys is not None:
            pulumi.set(__self__, "agreement_keys", agreement_keys)

    @property
    @pulumi.getter(name="agreedAt")
    def agreed_at(self) -> Optional[str]:
        """
        Timestamp when the agreements were accepted.
        """
        return pulumi.get(self, "agreed_at")

    @property
    @pulumi.getter(name="agreedBy")
    def agreed_by(self) -> Optional[str]:
        """
        Client IP address.
        """
        return pulumi.get(self, "agreed_by")

    @property
    @pulumi.getter(name="agreementKeys")
    def agreement_keys(self) -> Optional[Sequence[str]]:
        """
        List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements API under <code>TopLevelDomain</code> resource.
        """
        return pulumi.get(self, "agreement_keys")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class HostNameResponse(dict):
    """
    Details of a hostname derived from a domain.
    """
    def __init__(__self__, *,
                 azure_resource_name: Optional[str] = None,
                 azure_resource_type: Optional[str] = None,
                 custom_host_name_dns_record_type: Optional[str] = None,
                 host_name_type: Optional[str] = None,
                 name: Optional[str] = None,
                 site_names: Optional[Sequence[str]] = None):
        """
        Details of a hostname derived from a domain.
        :param str azure_resource_name: Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name.
        :param str azure_resource_type: Type of the Azure resource the hostname is assigned to.
        :param str custom_host_name_dns_record_type: Type of the DNS record.
        :param str host_name_type: Type of the hostname.
        :param str name: Name of the hostname.
        :param Sequence[str] site_names: List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager.
        """
        if azure_resource_name is not None:
            pulumi.set(__self__, "azure_resource_name", azure_resource_name)
        if azure_resource_type is not None:
            pulumi.set(__self__, "azure_resource_type", azure_resource_type)
        if custom_host_name_dns_record_type is not None:
            pulumi.set(__self__, "custom_host_name_dns_record_type", custom_host_name_dns_record_type)
        if host_name_type is not None:
            pulumi.set(__self__, "host_name_type", host_name_type)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if site_names is not None:
            pulumi.set(__self__, "site_names", site_names)

    @property
    @pulumi.getter(name="azureResourceName")
    def azure_resource_name(self) -> Optional[str]:
        """
        Name of the Azure resource the hostname is assigned to. If it is assigned to a Traffic Manager then it will be the Traffic Manager name otherwise it will be the app name.
        """
        return pulumi.get(self, "azure_resource_name")

    @property
    @pulumi.getter(name="azureResourceType")
    def azure_resource_type(self) -> Optional[str]:
        """
        Type of the Azure resource the hostname is assigned to.
        """
        return pulumi.get(self, "azure_resource_type")

    @property
    @pulumi.getter(name="customHostNameDnsRecordType")
    def custom_host_name_dns_record_type(self) -> Optional[str]:
        """
        Type of the DNS record.
        """
        return pulumi.get(self, "custom_host_name_dns_record_type")

    @property
    @pulumi.getter(name="hostNameType")
    def host_name_type(self) -> Optional[str]:
        """
        Type of the hostname.
        """
        return pulumi.get(self, "host_name_type")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Name of the hostname.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="siteNames")
    def site_names(self) -> Optional[Sequence[str]]:
        """
        List of apps the hostname is assigned to. This list will have more than one app only if the hostname is pointing to a Traffic Manager.
        """
        return pulumi.get(self, "site_names")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class NameIdentifierResponseResult(dict):
    """
    Identifies an object.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None):
        """
        Identifies an object.
        :param str name: Name of the object.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        Name of the object.
        """
        return pulumi.get(self, "name")


@pulumi.output_type
class TldLegalAgreementResponseResult(dict):
    """
    Legal agreement for a top level domain.
    """
    def __init__(__self__, *,
                 agreement_key: str,
                 content: str,
                 title: str,
                 url: Optional[str] = None):
        """
        Legal agreement for a top level domain.
        :param str agreement_key: Unique identifier for the agreement.
        :param str content: Agreement details.
        :param str title: Agreement title.
        :param str url: URL where a copy of the agreement details is hosted.
        """
        pulumi.set(__self__, "agreement_key", agreement_key)
        pulumi.set(__self__, "content", content)
        pulumi.set(__self__, "title", title)
        if url is not None:
            pulumi.set(__self__, "url", url)

    @property
    @pulumi.getter(name="agreementKey")
    def agreement_key(self) -> str:
        """
        Unique identifier for the agreement.
        """
        return pulumi.get(self, "agreement_key")

    @property
    @pulumi.getter
    def content(self) -> str:
        """
        Agreement details.
        """
        return pulumi.get(self, "content")

    @property
    @pulumi.getter
    def title(self) -> str:
        """
        Agreement title.
        """
        return pulumi.get(self, "title")

    @property
    @pulumi.getter
    def url(self) -> Optional[str]:
        """
        URL where a copy of the agreement details is hosted.
        """
        return pulumi.get(self, "url")


