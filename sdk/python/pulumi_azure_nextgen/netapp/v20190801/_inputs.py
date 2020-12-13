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
    'ActiveDirectoryArgs',
    'ExportPolicyRuleArgs',
    'MountTargetPropertiesArgs',
    'ReplicationObjectArgs',
    'VolumePropertiesDataProtectionArgs',
    'VolumePropertiesExportPolicyArgs',
]

@pulumi.input_type
class ActiveDirectoryArgs:
    def __init__(__self__, *,
                 active_directory_id: Optional[pulumi.Input[str]] = None,
                 dns: Optional[pulumi.Input[str]] = None,
                 domain: Optional[pulumi.Input[str]] = None,
                 organizational_unit: Optional[pulumi.Input[str]] = None,
                 password: Optional[pulumi.Input[str]] = None,
                 smb_server_name: Optional[pulumi.Input[str]] = None,
                 status: Optional[pulumi.Input[str]] = None,
                 username: Optional[pulumi.Input[str]] = None):
        """
        Active Directory
        :param pulumi.Input[str] active_directory_id: Id of the Active Directory
        :param pulumi.Input[str] dns: Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
        :param pulumi.Input[str] domain: Name of the Active Directory domain
        :param pulumi.Input[str] organizational_unit: The Organizational Unit (OU) within the Windows Active Directory
        :param pulumi.Input[str] password: Plain text password of Active Directory domain administrator
        :param pulumi.Input[str] smb_server_name: NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
        :param pulumi.Input[str] status: Status of the Active Directory
        :param pulumi.Input[str] username: Username of Active Directory domain administrator
        """
        if active_directory_id is not None:
            pulumi.set(__self__, "active_directory_id", active_directory_id)
        if dns is not None:
            pulumi.set(__self__, "dns", dns)
        if domain is not None:
            pulumi.set(__self__, "domain", domain)
        if organizational_unit is not None:
            pulumi.set(__self__, "organizational_unit", organizational_unit)
        if password is not None:
            pulumi.set(__self__, "password", password)
        if smb_server_name is not None:
            pulumi.set(__self__, "smb_server_name", smb_server_name)
        if status is not None:
            pulumi.set(__self__, "status", status)
        if username is not None:
            pulumi.set(__self__, "username", username)

    @property
    @pulumi.getter(name="activeDirectoryId")
    def active_directory_id(self) -> Optional[pulumi.Input[str]]:
        """
        Id of the Active Directory
        """
        return pulumi.get(self, "active_directory_id")

    @active_directory_id.setter
    def active_directory_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "active_directory_id", value)

    @property
    @pulumi.getter
    def dns(self) -> Optional[pulumi.Input[str]]:
        """
        Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain
        """
        return pulumi.get(self, "dns")

    @dns.setter
    def dns(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "dns", value)

    @property
    @pulumi.getter
    def domain(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the Active Directory domain
        """
        return pulumi.get(self, "domain")

    @domain.setter
    def domain(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "domain", value)

    @property
    @pulumi.getter(name="organizationalUnit")
    def organizational_unit(self) -> Optional[pulumi.Input[str]]:
        """
        The Organizational Unit (OU) within the Windows Active Directory
        """
        return pulumi.get(self, "organizational_unit")

    @organizational_unit.setter
    def organizational_unit(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "organizational_unit", value)

    @property
    @pulumi.getter
    def password(self) -> Optional[pulumi.Input[str]]:
        """
        Plain text password of Active Directory domain administrator
        """
        return pulumi.get(self, "password")

    @password.setter
    def password(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "password", value)

    @property
    @pulumi.getter(name="smbServerName")
    def smb_server_name(self) -> Optional[pulumi.Input[str]]:
        """
        NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes
        """
        return pulumi.get(self, "smb_server_name")

    @smb_server_name.setter
    def smb_server_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "smb_server_name", value)

    @property
    @pulumi.getter
    def status(self) -> Optional[pulumi.Input[str]]:
        """
        Status of the Active Directory
        """
        return pulumi.get(self, "status")

    @status.setter
    def status(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "status", value)

    @property
    @pulumi.getter
    def username(self) -> Optional[pulumi.Input[str]]:
        """
        Username of Active Directory domain administrator
        """
        return pulumi.get(self, "username")

    @username.setter
    def username(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "username", value)


@pulumi.input_type
class ExportPolicyRuleArgs:
    def __init__(__self__, *,
                 allowed_clients: Optional[pulumi.Input[str]] = None,
                 cifs: Optional[pulumi.Input[bool]] = None,
                 nfsv3: Optional[pulumi.Input[bool]] = None,
                 nfsv41: Optional[pulumi.Input[bool]] = None,
                 rule_index: Optional[pulumi.Input[int]] = None,
                 unix_read_only: Optional[pulumi.Input[bool]] = None,
                 unix_read_write: Optional[pulumi.Input[bool]] = None):
        """
        Volume Export Policy Rule
        :param pulumi.Input[str] allowed_clients: Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
        :param pulumi.Input[bool] cifs: Allows CIFS protocol
        :param pulumi.Input[bool] nfsv3: Allows NFSv3 protocol
        :param pulumi.Input[bool] nfsv41: Allows NFSv4.1 protocol
        :param pulumi.Input[int] rule_index: Order index
        :param pulumi.Input[bool] unix_read_only: Read only access
        :param pulumi.Input[bool] unix_read_write: Read and write access
        """
        if allowed_clients is not None:
            pulumi.set(__self__, "allowed_clients", allowed_clients)
        if cifs is not None:
            pulumi.set(__self__, "cifs", cifs)
        if nfsv3 is not None:
            pulumi.set(__self__, "nfsv3", nfsv3)
        if nfsv41 is not None:
            pulumi.set(__self__, "nfsv41", nfsv41)
        if rule_index is not None:
            pulumi.set(__self__, "rule_index", rule_index)
        if unix_read_only is not None:
            pulumi.set(__self__, "unix_read_only", unix_read_only)
        if unix_read_write is not None:
            pulumi.set(__self__, "unix_read_write", unix_read_write)

    @property
    @pulumi.getter(name="allowedClients")
    def allowed_clients(self) -> Optional[pulumi.Input[str]]:
        """
        Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names
        """
        return pulumi.get(self, "allowed_clients")

    @allowed_clients.setter
    def allowed_clients(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "allowed_clients", value)

    @property
    @pulumi.getter
    def cifs(self) -> Optional[pulumi.Input[bool]]:
        """
        Allows CIFS protocol
        """
        return pulumi.get(self, "cifs")

    @cifs.setter
    def cifs(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "cifs", value)

    @property
    @pulumi.getter
    def nfsv3(self) -> Optional[pulumi.Input[bool]]:
        """
        Allows NFSv3 protocol
        """
        return pulumi.get(self, "nfsv3")

    @nfsv3.setter
    def nfsv3(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "nfsv3", value)

    @property
    @pulumi.getter
    def nfsv41(self) -> Optional[pulumi.Input[bool]]:
        """
        Allows NFSv4.1 protocol
        """
        return pulumi.get(self, "nfsv41")

    @nfsv41.setter
    def nfsv41(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "nfsv41", value)

    @property
    @pulumi.getter(name="ruleIndex")
    def rule_index(self) -> Optional[pulumi.Input[int]]:
        """
        Order index
        """
        return pulumi.get(self, "rule_index")

    @rule_index.setter
    def rule_index(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "rule_index", value)

    @property
    @pulumi.getter(name="unixReadOnly")
    def unix_read_only(self) -> Optional[pulumi.Input[bool]]:
        """
        Read only access
        """
        return pulumi.get(self, "unix_read_only")

    @unix_read_only.setter
    def unix_read_only(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "unix_read_only", value)

    @property
    @pulumi.getter(name="unixReadWrite")
    def unix_read_write(self) -> Optional[pulumi.Input[bool]]:
        """
        Read and write access
        """
        return pulumi.get(self, "unix_read_write")

    @unix_read_write.setter
    def unix_read_write(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "unix_read_write", value)


@pulumi.input_type
class MountTargetPropertiesArgs:
    def __init__(__self__, *,
                 file_system_id: pulumi.Input[str],
                 end_ip: Optional[pulumi.Input[str]] = None,
                 gateway: Optional[pulumi.Input[str]] = None,
                 netmask: Optional[pulumi.Input[str]] = None,
                 smb_server_fqdn: Optional[pulumi.Input[str]] = None,
                 start_ip: Optional[pulumi.Input[str]] = None,
                 subnet: Optional[pulumi.Input[str]] = None):
        """
        Mount target properties
        :param pulumi.Input[str] file_system_id: UUID v4 used to identify the MountTarget
        :param pulumi.Input[str] end_ip: The end of IPv4 address range to use when creating a new mount target
        :param pulumi.Input[str] gateway: The gateway of the IPv4 address range to use when creating a new mount target
        :param pulumi.Input[str] netmask: The netmask of the IPv4 address range to use when creating a new mount target
        :param pulumi.Input[str] smb_server_fqdn: The SMB server's Fully Qualified Domain Name, FQDN
        :param pulumi.Input[str] start_ip: The start of IPv4 address range to use when creating a new mount target
        :param pulumi.Input[str] subnet: The subnet
        """
        pulumi.set(__self__, "file_system_id", file_system_id)
        if end_ip is not None:
            pulumi.set(__self__, "end_ip", end_ip)
        if gateway is not None:
            pulumi.set(__self__, "gateway", gateway)
        if netmask is not None:
            pulumi.set(__self__, "netmask", netmask)
        if smb_server_fqdn is not None:
            pulumi.set(__self__, "smb_server_fqdn", smb_server_fqdn)
        if start_ip is not None:
            pulumi.set(__self__, "start_ip", start_ip)
        if subnet is not None:
            pulumi.set(__self__, "subnet", subnet)

    @property
    @pulumi.getter(name="fileSystemId")
    def file_system_id(self) -> pulumi.Input[str]:
        """
        UUID v4 used to identify the MountTarget
        """
        return pulumi.get(self, "file_system_id")

    @file_system_id.setter
    def file_system_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "file_system_id", value)

    @property
    @pulumi.getter(name="endIp")
    def end_ip(self) -> Optional[pulumi.Input[str]]:
        """
        The end of IPv4 address range to use when creating a new mount target
        """
        return pulumi.get(self, "end_ip")

    @end_ip.setter
    def end_ip(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "end_ip", value)

    @property
    @pulumi.getter
    def gateway(self) -> Optional[pulumi.Input[str]]:
        """
        The gateway of the IPv4 address range to use when creating a new mount target
        """
        return pulumi.get(self, "gateway")

    @gateway.setter
    def gateway(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "gateway", value)

    @property
    @pulumi.getter
    def netmask(self) -> Optional[pulumi.Input[str]]:
        """
        The netmask of the IPv4 address range to use when creating a new mount target
        """
        return pulumi.get(self, "netmask")

    @netmask.setter
    def netmask(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "netmask", value)

    @property
    @pulumi.getter(name="smbServerFqdn")
    def smb_server_fqdn(self) -> Optional[pulumi.Input[str]]:
        """
        The SMB server's Fully Qualified Domain Name, FQDN
        """
        return pulumi.get(self, "smb_server_fqdn")

    @smb_server_fqdn.setter
    def smb_server_fqdn(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "smb_server_fqdn", value)

    @property
    @pulumi.getter(name="startIp")
    def start_ip(self) -> Optional[pulumi.Input[str]]:
        """
        The start of IPv4 address range to use when creating a new mount target
        """
        return pulumi.get(self, "start_ip")

    @start_ip.setter
    def start_ip(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "start_ip", value)

    @property
    @pulumi.getter
    def subnet(self) -> Optional[pulumi.Input[str]]:
        """
        The subnet
        """
        return pulumi.get(self, "subnet")

    @subnet.setter
    def subnet(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "subnet", value)


@pulumi.input_type
class ReplicationObjectArgs:
    def __init__(__self__, *,
                 endpoint_type: pulumi.Input[str],
                 remote_volume_resource_id: pulumi.Input[str],
                 replication_schedule: pulumi.Input[str],
                 replication_id: Optional[pulumi.Input[str]] = None):
        """
        Replication properties
        :param pulumi.Input[str] endpoint_type: Indicates whether the local volume is the source or destination for the Volume Replication
        :param pulumi.Input[str] remote_volume_resource_id: The resource ID of the remote volume.
        :param pulumi.Input[str] replication_schedule: Schedule
        :param pulumi.Input[str] replication_id: Id
        """
        pulumi.set(__self__, "endpoint_type", endpoint_type)
        pulumi.set(__self__, "remote_volume_resource_id", remote_volume_resource_id)
        pulumi.set(__self__, "replication_schedule", replication_schedule)
        if replication_id is not None:
            pulumi.set(__self__, "replication_id", replication_id)

    @property
    @pulumi.getter(name="endpointType")
    def endpoint_type(self) -> pulumi.Input[str]:
        """
        Indicates whether the local volume is the source or destination for the Volume Replication
        """
        return pulumi.get(self, "endpoint_type")

    @endpoint_type.setter
    def endpoint_type(self, value: pulumi.Input[str]):
        pulumi.set(self, "endpoint_type", value)

    @property
    @pulumi.getter(name="remoteVolumeResourceId")
    def remote_volume_resource_id(self) -> pulumi.Input[str]:
        """
        The resource ID of the remote volume.
        """
        return pulumi.get(self, "remote_volume_resource_id")

    @remote_volume_resource_id.setter
    def remote_volume_resource_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "remote_volume_resource_id", value)

    @property
    @pulumi.getter(name="replicationSchedule")
    def replication_schedule(self) -> pulumi.Input[str]:
        """
        Schedule
        """
        return pulumi.get(self, "replication_schedule")

    @replication_schedule.setter
    def replication_schedule(self, value: pulumi.Input[str]):
        pulumi.set(self, "replication_schedule", value)

    @property
    @pulumi.getter(name="replicationId")
    def replication_id(self) -> Optional[pulumi.Input[str]]:
        """
        Id
        """
        return pulumi.get(self, "replication_id")

    @replication_id.setter
    def replication_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "replication_id", value)


@pulumi.input_type
class VolumePropertiesDataProtectionArgs:
    def __init__(__self__, *,
                 replication: Optional[pulumi.Input['ReplicationObjectArgs']] = None):
        """
        DataProtection volume, can have a replication object
        :param pulumi.Input['ReplicationObjectArgs'] replication: Replication properties
        """
        if replication is not None:
            pulumi.set(__self__, "replication", replication)

    @property
    @pulumi.getter
    def replication(self) -> Optional[pulumi.Input['ReplicationObjectArgs']]:
        """
        Replication properties
        """
        return pulumi.get(self, "replication")

    @replication.setter
    def replication(self, value: Optional[pulumi.Input['ReplicationObjectArgs']]):
        pulumi.set(self, "replication", value)


@pulumi.input_type
class VolumePropertiesExportPolicyArgs:
    def __init__(__self__, *,
                 rules: Optional[pulumi.Input[Sequence[pulumi.Input['ExportPolicyRuleArgs']]]] = None):
        """
        Set of export policy rules
        :param pulumi.Input[Sequence[pulumi.Input['ExportPolicyRuleArgs']]] rules: Export policy rule
        """
        if rules is not None:
            pulumi.set(__self__, "rules", rules)

    @property
    @pulumi.getter
    def rules(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['ExportPolicyRuleArgs']]]]:
        """
        Export policy rule
        """
        return pulumi.get(self, "rules")

    @rules.setter
    def rules(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['ExportPolicyRuleArgs']]]]):
        pulumi.set(self, "rules", value)


