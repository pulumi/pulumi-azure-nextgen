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
    'AdaptiveApplicationControlIssueSummaryResponse',
    'AssessmentLinksResponse',
    'AssessmentStatusResponse',
    'AzureResourceDetailsResponse',
    'JitNetworkAccessPolicyVirtualMachineResponse',
    'JitNetworkAccessPortRuleResponse',
    'JitNetworkAccessRequestPortResponse',
    'JitNetworkAccessRequestResponse',
    'JitNetworkAccessRequestVirtualMachineResponse',
    'OnPremiseResourceDetailsResponse',
    'PathRecommendationResponse',
    'ProtectionModeResponse',
    'PublisherInfoResponse',
    'SecurityAssessmentMetadataPartnerDataResponse',
    'SecurityAssessmentMetadataPropertiesResponse',
    'SecurityAssessmentPartnerDataResponse',
    'UserRecommendationResponse',
    'VmRecommendationResponse',
]

@pulumi.output_type
class AdaptiveApplicationControlIssueSummaryResponse(dict):
    """
    Represents a summary of the alerts of the machine group
    """
    def __init__(__self__, *,
                 issue: Optional[str] = None,
                 number_of_vms: Optional[float] = None):
        """
        Represents a summary of the alerts of the machine group
        :param str issue: An alert that machines within a group can have
        :param float number_of_vms: The number of machines in the group that have this alert
        """
        if issue is not None:
            pulumi.set(__self__, "issue", issue)
        if number_of_vms is not None:
            pulumi.set(__self__, "number_of_vms", number_of_vms)

    @property
    @pulumi.getter
    def issue(self) -> Optional[str]:
        """
        An alert that machines within a group can have
        """
        return pulumi.get(self, "issue")

    @property
    @pulumi.getter(name="numberOfVms")
    def number_of_vms(self) -> Optional[float]:
        """
        The number of machines in the group that have this alert
        """
        return pulumi.get(self, "number_of_vms")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class AssessmentLinksResponse(dict):
    """
    Links relevant to the assessment
    """
    def __init__(__self__, *,
                 azure_portal_uri: str):
        """
        Links relevant to the assessment
        :param str azure_portal_uri: Link to assessment in Azure Portal
        """
        pulumi.set(__self__, "azure_portal_uri", azure_portal_uri)

    @property
    @pulumi.getter(name="azurePortalUri")
    def azure_portal_uri(self) -> str:
        """
        Link to assessment in Azure Portal
        """
        return pulumi.get(self, "azure_portal_uri")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class AssessmentStatusResponse(dict):
    """
    The result of the assessment
    """
    def __init__(__self__, *,
                 code: str,
                 cause: Optional[str] = None,
                 description: Optional[str] = None):
        """
        The result of the assessment
        :param str code: Programmatic code for the status of the assessment
        :param str cause: Programmatic code for the cause of the assessment status
        :param str description: Human readable description of the assessment status
        """
        pulumi.set(__self__, "code", code)
        if cause is not None:
            pulumi.set(__self__, "cause", cause)
        if description is not None:
            pulumi.set(__self__, "description", description)

    @property
    @pulumi.getter
    def code(self) -> str:
        """
        Programmatic code for the status of the assessment
        """
        return pulumi.get(self, "code")

    @property
    @pulumi.getter
    def cause(self) -> Optional[str]:
        """
        Programmatic code for the cause of the assessment status
        """
        return pulumi.get(self, "cause")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Human readable description of the assessment status
        """
        return pulumi.get(self, "description")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class AzureResourceDetailsResponse(dict):
    """
    Details of the Azure resource that was assessed
    """
    def __init__(__self__, *,
                 id: str,
                 source: str):
        """
        Details of the Azure resource that was assessed
        :param str id: Azure resource Id of the assessed resource
        :param str source: The platform where the assessed resource resides
        """
        pulumi.set(__self__, "id", id)
        pulumi.set(__self__, "source", 'Azure')

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Azure resource Id of the assessed resource
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def source(self) -> str:
        """
        The platform where the assessed resource resides
        """
        return pulumi.get(self, "source")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JitNetworkAccessPolicyVirtualMachineResponse(dict):
    def __init__(__self__, *,
                 id: str,
                 ports: Sequence['outputs.JitNetworkAccessPortRuleResponse'],
                 public_ip_address: Optional[str] = None):
        """
        :param str id: Resource ID of the virtual machine that is linked to this policy
        :param Sequence['JitNetworkAccessPortRuleResponseArgs'] ports: Port configurations for the virtual machine
        :param str public_ip_address: Public IP address of the Azure Firewall that is linked to this policy, if applicable
        """
        pulumi.set(__self__, "id", id)
        pulumi.set(__self__, "ports", ports)
        if public_ip_address is not None:
            pulumi.set(__self__, "public_ip_address", public_ip_address)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID of the virtual machine that is linked to this policy
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def ports(self) -> Sequence['outputs.JitNetworkAccessPortRuleResponse']:
        """
        Port configurations for the virtual machine
        """
        return pulumi.get(self, "ports")

    @property
    @pulumi.getter(name="publicIpAddress")
    def public_ip_address(self) -> Optional[str]:
        """
        Public IP address of the Azure Firewall that is linked to this policy, if applicable
        """
        return pulumi.get(self, "public_ip_address")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JitNetworkAccessPortRuleResponse(dict):
    def __init__(__self__, *,
                 max_request_access_duration: str,
                 number: int,
                 protocol: str,
                 allowed_source_address_prefix: Optional[str] = None,
                 allowed_source_address_prefixes: Optional[Sequence[str]] = None):
        """
        :param str max_request_access_duration: Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
        :param str allowed_source_address_prefix: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
        :param Sequence[str] allowed_source_address_prefixes: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
        """
        pulumi.set(__self__, "max_request_access_duration", max_request_access_duration)
        pulumi.set(__self__, "number", number)
        pulumi.set(__self__, "protocol", protocol)
        if allowed_source_address_prefix is not None:
            pulumi.set(__self__, "allowed_source_address_prefix", allowed_source_address_prefix)
        if allowed_source_address_prefixes is not None:
            pulumi.set(__self__, "allowed_source_address_prefixes", allowed_source_address_prefixes)

    @property
    @pulumi.getter(name="maxRequestAccessDuration")
    def max_request_access_duration(self) -> str:
        """
        Maximum duration requests can be made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
        """
        return pulumi.get(self, "max_request_access_duration")

    @property
    @pulumi.getter
    def number(self) -> int:
        return pulumi.get(self, "number")

    @property
    @pulumi.getter
    def protocol(self) -> str:
        return pulumi.get(self, "protocol")

    @property
    @pulumi.getter(name="allowedSourceAddressPrefix")
    def allowed_source_address_prefix(self) -> Optional[str]:
        """
        Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
        """
        return pulumi.get(self, "allowed_source_address_prefix")

    @property
    @pulumi.getter(name="allowedSourceAddressPrefixes")
    def allowed_source_address_prefixes(self) -> Optional[Sequence[str]]:
        """
        Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
        """
        return pulumi.get(self, "allowed_source_address_prefixes")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JitNetworkAccessRequestPortResponse(dict):
    def __init__(__self__, *,
                 end_time_utc: str,
                 number: int,
                 status: str,
                 status_reason: str,
                 allowed_source_address_prefix: Optional[str] = None,
                 allowed_source_address_prefixes: Optional[Sequence[str]] = None,
                 mapped_port: Optional[int] = None):
        """
        :param str end_time_utc: The date & time at which the request ends in UTC
        :param str status: The status of the port
        :param str status_reason: A description of why the `status` has its value
        :param str allowed_source_address_prefix: Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
        :param Sequence[str] allowed_source_address_prefixes: Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
        :param int mapped_port: The port which is mapped to this port's `number` in the Azure Firewall, if applicable
        """
        pulumi.set(__self__, "end_time_utc", end_time_utc)
        pulumi.set(__self__, "number", number)
        pulumi.set(__self__, "status", status)
        pulumi.set(__self__, "status_reason", status_reason)
        if allowed_source_address_prefix is not None:
            pulumi.set(__self__, "allowed_source_address_prefix", allowed_source_address_prefix)
        if allowed_source_address_prefixes is not None:
            pulumi.set(__self__, "allowed_source_address_prefixes", allowed_source_address_prefixes)
        if mapped_port is not None:
            pulumi.set(__self__, "mapped_port", mapped_port)

    @property
    @pulumi.getter(name="endTimeUtc")
    def end_time_utc(self) -> str:
        """
        The date & time at which the request ends in UTC
        """
        return pulumi.get(self, "end_time_utc")

    @property
    @pulumi.getter
    def number(self) -> int:
        return pulumi.get(self, "number")

    @property
    @pulumi.getter
    def status(self) -> str:
        """
        The status of the port
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter(name="statusReason")
    def status_reason(self) -> str:
        """
        A description of why the `status` has its value
        """
        return pulumi.get(self, "status_reason")

    @property
    @pulumi.getter(name="allowedSourceAddressPrefix")
    def allowed_source_address_prefix(self) -> Optional[str]:
        """
        Mutually exclusive with the "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR, for example "192.168.0.3" or "192.168.0.0/16".
        """
        return pulumi.get(self, "allowed_source_address_prefix")

    @property
    @pulumi.getter(name="allowedSourceAddressPrefixes")
    def allowed_source_address_prefixes(self) -> Optional[Sequence[str]]:
        """
        Mutually exclusive with the "allowedSourceAddressPrefix" parameter.
        """
        return pulumi.get(self, "allowed_source_address_prefixes")

    @property
    @pulumi.getter(name="mappedPort")
    def mapped_port(self) -> Optional[int]:
        """
        The port which is mapped to this port's `number` in the Azure Firewall, if applicable
        """
        return pulumi.get(self, "mapped_port")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JitNetworkAccessRequestResponse(dict):
    def __init__(__self__, *,
                 requestor: str,
                 start_time_utc: str,
                 virtual_machines: Sequence['outputs.JitNetworkAccessRequestVirtualMachineResponse'],
                 justification: Optional[str] = None):
        """
        :param str requestor: The identity of the person who made the request
        :param str start_time_utc: The start time of the request in UTC
        :param str justification: The justification for making the initiate request
        """
        pulumi.set(__self__, "requestor", requestor)
        pulumi.set(__self__, "start_time_utc", start_time_utc)
        pulumi.set(__self__, "virtual_machines", virtual_machines)
        if justification is not None:
            pulumi.set(__self__, "justification", justification)

    @property
    @pulumi.getter
    def requestor(self) -> str:
        """
        The identity of the person who made the request
        """
        return pulumi.get(self, "requestor")

    @property
    @pulumi.getter(name="startTimeUtc")
    def start_time_utc(self) -> str:
        """
        The start time of the request in UTC
        """
        return pulumi.get(self, "start_time_utc")

    @property
    @pulumi.getter(name="virtualMachines")
    def virtual_machines(self) -> Sequence['outputs.JitNetworkAccessRequestVirtualMachineResponse']:
        return pulumi.get(self, "virtual_machines")

    @property
    @pulumi.getter
    def justification(self) -> Optional[str]:
        """
        The justification for making the initiate request
        """
        return pulumi.get(self, "justification")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JitNetworkAccessRequestVirtualMachineResponse(dict):
    def __init__(__self__, *,
                 id: str,
                 ports: Sequence['outputs.JitNetworkAccessRequestPortResponse']):
        """
        :param str id: Resource ID of the virtual machine that is linked to this policy
        :param Sequence['JitNetworkAccessRequestPortResponseArgs'] ports: The ports that were opened for the virtual machine
        """
        pulumi.set(__self__, "id", id)
        pulumi.set(__self__, "ports", ports)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID of the virtual machine that is linked to this policy
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def ports(self) -> Sequence['outputs.JitNetworkAccessRequestPortResponse']:
        """
        The ports that were opened for the virtual machine
        """
        return pulumi.get(self, "ports")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class OnPremiseResourceDetailsResponse(dict):
    """
    Details of the On Premise resource that was assessed
    """
    def __init__(__self__, *,
                 machine_name: str,
                 source: str,
                 source_computer_id: str,
                 vmuuid: str,
                 workspace_id: str):
        """
        Details of the On Premise resource that was assessed
        :param str machine_name: The name of the machine
        :param str source: The platform where the assessed resource resides
        :param str source_computer_id: The oms agent Id installed on the machine
        :param str vmuuid: The unique Id of the machine
        :param str workspace_id: Azure resource Id of the workspace the machine is attached to
        """
        pulumi.set(__self__, "machine_name", machine_name)
        pulumi.set(__self__, "source", 'OnPremise')
        pulumi.set(__self__, "source_computer_id", source_computer_id)
        pulumi.set(__self__, "vmuuid", vmuuid)
        pulumi.set(__self__, "workspace_id", workspace_id)

    @property
    @pulumi.getter(name="machineName")
    def machine_name(self) -> str:
        """
        The name of the machine
        """
        return pulumi.get(self, "machine_name")

    @property
    @pulumi.getter
    def source(self) -> str:
        """
        The platform where the assessed resource resides
        """
        return pulumi.get(self, "source")

    @property
    @pulumi.getter(name="sourceComputerId")
    def source_computer_id(self) -> str:
        """
        The oms agent Id installed on the machine
        """
        return pulumi.get(self, "source_computer_id")

    @property
    @pulumi.getter
    def vmuuid(self) -> str:
        """
        The unique Id of the machine
        """
        return pulumi.get(self, "vmuuid")

    @property
    @pulumi.getter(name="workspaceId")
    def workspace_id(self) -> str:
        """
        Azure resource Id of the workspace the machine is attached to
        """
        return pulumi.get(self, "workspace_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PathRecommendationResponse(dict):
    """
    Represents a path that is recommended to be allowed and its properties
    """
    def __init__(__self__, *,
                 action: Optional[str] = None,
                 common: Optional[bool] = None,
                 configuration_status: Optional[str] = None,
                 file_type: Optional[str] = None,
                 path: Optional[str] = None,
                 publisher_info: Optional['outputs.PublisherInfoResponse'] = None,
                 type: Optional[str] = None,
                 user_sids: Optional[Sequence[str]] = None,
                 usernames: Optional[Sequence['outputs.UserRecommendationResponse']] = None):
        """
        Represents a path that is recommended to be allowed and its properties
        :param str action: The recommendation action of the machine or rule
        :param bool common: Whether the application is commonly run on the machine
        :param str configuration_status: The configuration status of the machines group or machine or rule
        :param str file_type: The type of the file (for Linux files - Executable is used)
        :param str path: The full path of the file, or an identifier of the application
        :param 'PublisherInfoResponseArgs' publisher_info: Represents the publisher information of a process/rule
        :param str type: The type of the rule to be allowed
        """
        if action is not None:
            pulumi.set(__self__, "action", action)
        if common is not None:
            pulumi.set(__self__, "common", common)
        if configuration_status is not None:
            pulumi.set(__self__, "configuration_status", configuration_status)
        if file_type is not None:
            pulumi.set(__self__, "file_type", file_type)
        if path is not None:
            pulumi.set(__self__, "path", path)
        if publisher_info is not None:
            pulumi.set(__self__, "publisher_info", publisher_info)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if user_sids is not None:
            pulumi.set(__self__, "user_sids", user_sids)
        if usernames is not None:
            pulumi.set(__self__, "usernames", usernames)

    @property
    @pulumi.getter
    def action(self) -> Optional[str]:
        """
        The recommendation action of the machine or rule
        """
        return pulumi.get(self, "action")

    @property
    @pulumi.getter
    def common(self) -> Optional[bool]:
        """
        Whether the application is commonly run on the machine
        """
        return pulumi.get(self, "common")

    @property
    @pulumi.getter(name="configurationStatus")
    def configuration_status(self) -> Optional[str]:
        """
        The configuration status of the machines group or machine or rule
        """
        return pulumi.get(self, "configuration_status")

    @property
    @pulumi.getter(name="fileType")
    def file_type(self) -> Optional[str]:
        """
        The type of the file (for Linux files - Executable is used)
        """
        return pulumi.get(self, "file_type")

    @property
    @pulumi.getter
    def path(self) -> Optional[str]:
        """
        The full path of the file, or an identifier of the application
        """
        return pulumi.get(self, "path")

    @property
    @pulumi.getter(name="publisherInfo")
    def publisher_info(self) -> Optional['outputs.PublisherInfoResponse']:
        """
        Represents the publisher information of a process/rule
        """
        return pulumi.get(self, "publisher_info")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of the rule to be allowed
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="userSids")
    def user_sids(self) -> Optional[Sequence[str]]:
        return pulumi.get(self, "user_sids")

    @property
    @pulumi.getter
    def usernames(self) -> Optional[Sequence['outputs.UserRecommendationResponse']]:
        return pulumi.get(self, "usernames")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ProtectionModeResponse(dict):
    """
    The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
    """
    def __init__(__self__, *,
                 exe: Optional[str] = None,
                 executable: Optional[str] = None,
                 msi: Optional[str] = None,
                 script: Optional[str] = None):
        """
        The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
        :param str exe: The application control policy enforcement/protection mode of the machine group
        :param str executable: The application control policy enforcement/protection mode of the machine group
        :param str msi: The application control policy enforcement/protection mode of the machine group
        :param str script: The application control policy enforcement/protection mode of the machine group
        """
        if exe is not None:
            pulumi.set(__self__, "exe", exe)
        if executable is not None:
            pulumi.set(__self__, "executable", executable)
        if msi is not None:
            pulumi.set(__self__, "msi", msi)
        if script is not None:
            pulumi.set(__self__, "script", script)

    @property
    @pulumi.getter
    def exe(self) -> Optional[str]:
        """
        The application control policy enforcement/protection mode of the machine group
        """
        return pulumi.get(self, "exe")

    @property
    @pulumi.getter
    def executable(self) -> Optional[str]:
        """
        The application control policy enforcement/protection mode of the machine group
        """
        return pulumi.get(self, "executable")

    @property
    @pulumi.getter
    def msi(self) -> Optional[str]:
        """
        The application control policy enforcement/protection mode of the machine group
        """
        return pulumi.get(self, "msi")

    @property
    @pulumi.getter
    def script(self) -> Optional[str]:
        """
        The application control policy enforcement/protection mode of the machine group
        """
        return pulumi.get(self, "script")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PublisherInfoResponse(dict):
    """
    Represents the publisher information of a process/rule
    """
    def __init__(__self__, *,
                 binary_name: Optional[str] = None,
                 product_name: Optional[str] = None,
                 publisher_name: Optional[str] = None,
                 version: Optional[str] = None):
        """
        Represents the publisher information of a process/rule
        :param str binary_name: The "OriginalName" field taken from the file's version resource
        :param str product_name: The product name taken from the file's version resource
        :param str publisher_name: The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
        :param str version: The binary file version taken from the file's version resource
        """
        if binary_name is not None:
            pulumi.set(__self__, "binary_name", binary_name)
        if product_name is not None:
            pulumi.set(__self__, "product_name", product_name)
        if publisher_name is not None:
            pulumi.set(__self__, "publisher_name", publisher_name)
        if version is not None:
            pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter(name="binaryName")
    def binary_name(self) -> Optional[str]:
        """
        The "OriginalName" field taken from the file's version resource
        """
        return pulumi.get(self, "binary_name")

    @property
    @pulumi.getter(name="productName")
    def product_name(self) -> Optional[str]:
        """
        The product name taken from the file's version resource
        """
        return pulumi.get(self, "product_name")

    @property
    @pulumi.getter(name="publisherName")
    def publisher_name(self) -> Optional[str]:
        """
        The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
        """
        return pulumi.get(self, "publisher_name")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        """
        The binary file version taken from the file's version resource
        """
        return pulumi.get(self, "version")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SecurityAssessmentMetadataPartnerDataResponse(dict):
    """
    Describes the partner that created the assessment
    """
    def __init__(__self__, *,
                 partner_name: str,
                 secret: str,
                 product_name: Optional[str] = None):
        """
        Describes the partner that created the assessment
        :param str partner_name: Name of the company of the partner
        :param str secret: Secret to authenticate the partner and verify it created the assessment - write only
        :param str product_name: Name of the product of the partner that created the assessment
        """
        pulumi.set(__self__, "partner_name", partner_name)
        pulumi.set(__self__, "secret", secret)
        if product_name is not None:
            pulumi.set(__self__, "product_name", product_name)

    @property
    @pulumi.getter(name="partnerName")
    def partner_name(self) -> str:
        """
        Name of the company of the partner
        """
        return pulumi.get(self, "partner_name")

    @property
    @pulumi.getter
    def secret(self) -> str:
        """
        Secret to authenticate the partner and verify it created the assessment - write only
        """
        return pulumi.get(self, "secret")

    @property
    @pulumi.getter(name="productName")
    def product_name(self) -> Optional[str]:
        """
        Name of the product of the partner that created the assessment
        """
        return pulumi.get(self, "product_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SecurityAssessmentMetadataPropertiesResponse(dict):
    """
    Describes properties of an assessment metadata.
    """
    def __init__(__self__, *,
                 assessment_type: str,
                 display_name: str,
                 policy_definition_id: str,
                 severity: str,
                 category: Optional[Sequence[str]] = None,
                 description: Optional[str] = None,
                 implementation_effort: Optional[str] = None,
                 partner_data: Optional['outputs.SecurityAssessmentMetadataPartnerDataResponse'] = None,
                 preview: Optional[bool] = None,
                 remediation_description: Optional[str] = None,
                 threats: Optional[Sequence[str]] = None,
                 user_impact: Optional[str] = None):
        """
        Describes properties of an assessment metadata.
        :param str assessment_type: BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
        :param str display_name: User friendly display name of the assessment
        :param str policy_definition_id: Azure resource ID of the policy definition that turns this assessment calculation on
        :param str severity: The severity level of the assessment
        :param str description: Human readable description of the assessment
        :param str implementation_effort: The implementation effort required to remediate this assessment
        :param 'SecurityAssessmentMetadataPartnerDataResponseArgs' partner_data: Describes the partner that created the assessment
        :param bool preview: True if this assessment is in preview release status
        :param str remediation_description: Human readable description of what you should do to mitigate this security issue
        :param str user_impact: The user impact of the assessment
        """
        pulumi.set(__self__, "assessment_type", assessment_type)
        pulumi.set(__self__, "display_name", display_name)
        pulumi.set(__self__, "policy_definition_id", policy_definition_id)
        pulumi.set(__self__, "severity", severity)
        if category is not None:
            pulumi.set(__self__, "category", category)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if implementation_effort is not None:
            pulumi.set(__self__, "implementation_effort", implementation_effort)
        if partner_data is not None:
            pulumi.set(__self__, "partner_data", partner_data)
        if preview is not None:
            pulumi.set(__self__, "preview", preview)
        if remediation_description is not None:
            pulumi.set(__self__, "remediation_description", remediation_description)
        if threats is not None:
            pulumi.set(__self__, "threats", threats)
        if user_impact is not None:
            pulumi.set(__self__, "user_impact", user_impact)

    @property
    @pulumi.getter(name="assessmentType")
    def assessment_type(self) -> str:
        """
        BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
        """
        return pulumi.get(self, "assessment_type")

    @property
    @pulumi.getter(name="displayName")
    def display_name(self) -> str:
        """
        User friendly display name of the assessment
        """
        return pulumi.get(self, "display_name")

    @property
    @pulumi.getter(name="policyDefinitionId")
    def policy_definition_id(self) -> str:
        """
        Azure resource ID of the policy definition that turns this assessment calculation on
        """
        return pulumi.get(self, "policy_definition_id")

    @property
    @pulumi.getter
    def severity(self) -> str:
        """
        The severity level of the assessment
        """
        return pulumi.get(self, "severity")

    @property
    @pulumi.getter
    def category(self) -> Optional[Sequence[str]]:
        return pulumi.get(self, "category")

    @property
    @pulumi.getter
    def description(self) -> Optional[str]:
        """
        Human readable description of the assessment
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="implementationEffort")
    def implementation_effort(self) -> Optional[str]:
        """
        The implementation effort required to remediate this assessment
        """
        return pulumi.get(self, "implementation_effort")

    @property
    @pulumi.getter(name="partnerData")
    def partner_data(self) -> Optional['outputs.SecurityAssessmentMetadataPartnerDataResponse']:
        """
        Describes the partner that created the assessment
        """
        return pulumi.get(self, "partner_data")

    @property
    @pulumi.getter
    def preview(self) -> Optional[bool]:
        """
        True if this assessment is in preview release status
        """
        return pulumi.get(self, "preview")

    @property
    @pulumi.getter(name="remediationDescription")
    def remediation_description(self) -> Optional[str]:
        """
        Human readable description of what you should do to mitigate this security issue
        """
        return pulumi.get(self, "remediation_description")

    @property
    @pulumi.getter
    def threats(self) -> Optional[Sequence[str]]:
        return pulumi.get(self, "threats")

    @property
    @pulumi.getter(name="userImpact")
    def user_impact(self) -> Optional[str]:
        """
        The user impact of the assessment
        """
        return pulumi.get(self, "user_impact")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SecurityAssessmentPartnerDataResponse(dict):
    """
    Data regarding 3rd party partner integration
    """
    def __init__(__self__, *,
                 partner_name: str,
                 secret: str):
        """
        Data regarding 3rd party partner integration
        :param str partner_name: Name of the company of the partner
        :param str secret: secret to authenticate the partner - write only
        """
        pulumi.set(__self__, "partner_name", partner_name)
        pulumi.set(__self__, "secret", secret)

    @property
    @pulumi.getter(name="partnerName")
    def partner_name(self) -> str:
        """
        Name of the company of the partner
        """
        return pulumi.get(self, "partner_name")

    @property
    @pulumi.getter
    def secret(self) -> str:
        """
        secret to authenticate the partner - write only
        """
        return pulumi.get(self, "secret")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class UserRecommendationResponse(dict):
    """
    Represents a user that is recommended to be allowed for a certain rule
    """
    def __init__(__self__, *,
                 recommendation_action: Optional[str] = None,
                 username: Optional[str] = None):
        """
        Represents a user that is recommended to be allowed for a certain rule
        :param str recommendation_action: The recommendation action of the machine or rule
        :param str username: Represents a user that is recommended to be allowed for a certain rule
        """
        if recommendation_action is not None:
            pulumi.set(__self__, "recommendation_action", recommendation_action)
        if username is not None:
            pulumi.set(__self__, "username", username)

    @property
    @pulumi.getter(name="recommendationAction")
    def recommendation_action(self) -> Optional[str]:
        """
        The recommendation action of the machine or rule
        """
        return pulumi.get(self, "recommendation_action")

    @property
    @pulumi.getter
    def username(self) -> Optional[str]:
        """
        Represents a user that is recommended to be allowed for a certain rule
        """
        return pulumi.get(self, "username")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class VmRecommendationResponse(dict):
    """
    Represents a machine that is part of a machine group
    """
    def __init__(__self__, *,
                 configuration_status: Optional[str] = None,
                 enforcement_support: Optional[str] = None,
                 recommendation_action: Optional[str] = None,
                 resource_id: Optional[str] = None):
        """
        Represents a machine that is part of a machine group
        :param str configuration_status: The configuration status of the machines group or machine or rule
        :param str enforcement_support: The machine supportability of Enforce feature
        :param str recommendation_action: The recommendation action of the machine or rule
        :param str resource_id: The full resource id of the machine
        """
        if configuration_status is not None:
            pulumi.set(__self__, "configuration_status", configuration_status)
        if enforcement_support is not None:
            pulumi.set(__self__, "enforcement_support", enforcement_support)
        if recommendation_action is not None:
            pulumi.set(__self__, "recommendation_action", recommendation_action)
        if resource_id is not None:
            pulumi.set(__self__, "resource_id", resource_id)

    @property
    @pulumi.getter(name="configurationStatus")
    def configuration_status(self) -> Optional[str]:
        """
        The configuration status of the machines group or machine or rule
        """
        return pulumi.get(self, "configuration_status")

    @property
    @pulumi.getter(name="enforcementSupport")
    def enforcement_support(self) -> Optional[str]:
        """
        The machine supportability of Enforce feature
        """
        return pulumi.get(self, "enforcement_support")

    @property
    @pulumi.getter(name="recommendationAction")
    def recommendation_action(self) -> Optional[str]:
        """
        The recommendation action of the machine or rule
        """
        return pulumi.get(self, "recommendation_action")

    @property
    @pulumi.getter(name="resourceId")
    def resource_id(self) -> Optional[str]:
        """
        The full resource id of the machine
        """
        return pulumi.get(self, "resource_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


