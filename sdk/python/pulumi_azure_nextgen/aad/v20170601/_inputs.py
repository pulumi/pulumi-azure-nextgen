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
    'DomainSecuritySettingsArgs',
    'ForestTrustArgs',
    'LdapsSettingsArgs',
    'NotificationSettingsArgs',
    'ResourceForestSettingsArgs',
]

@pulumi.input_type
class DomainSecuritySettingsArgs:
    def __init__(__self__, *,
                 ntlm_v1: Optional[pulumi.Input[Union[str, 'NtlmV1']]] = None,
                 sync_kerberos_passwords: Optional[pulumi.Input[Union[str, 'SyncKerberosPasswords']]] = None,
                 sync_ntlm_passwords: Optional[pulumi.Input[Union[str, 'SyncNtlmPasswords']]] = None,
                 sync_on_prem_passwords: Optional[pulumi.Input[Union[str, 'SyncOnPremPasswords']]] = None,
                 tls_v1: Optional[pulumi.Input[Union[str, 'TlsV1']]] = None):
        """
        Domain Security Settings
        :param pulumi.Input[Union[str, 'NtlmV1']] ntlm_v1: A flag to determine whether or not NtlmV1 is enabled or disabled.
        :param pulumi.Input[Union[str, 'SyncKerberosPasswords']] sync_kerberos_passwords: A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
        :param pulumi.Input[Union[str, 'SyncNtlmPasswords']] sync_ntlm_passwords: A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
        :param pulumi.Input[Union[str, 'SyncOnPremPasswords']] sync_on_prem_passwords: A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
        :param pulumi.Input[Union[str, 'TlsV1']] tls_v1: A flag to determine whether or not TlsV1 is enabled or disabled.
        """
        if ntlm_v1 is not None:
            pulumi.set(__self__, "ntlm_v1", ntlm_v1)
        if sync_kerberos_passwords is not None:
            pulumi.set(__self__, "sync_kerberos_passwords", sync_kerberos_passwords)
        if sync_ntlm_passwords is not None:
            pulumi.set(__self__, "sync_ntlm_passwords", sync_ntlm_passwords)
        if sync_on_prem_passwords is not None:
            pulumi.set(__self__, "sync_on_prem_passwords", sync_on_prem_passwords)
        if tls_v1 is not None:
            pulumi.set(__self__, "tls_v1", tls_v1)

    @property
    @pulumi.getter(name="ntlmV1")
    def ntlm_v1(self) -> Optional[pulumi.Input[Union[str, 'NtlmV1']]]:
        """
        A flag to determine whether or not NtlmV1 is enabled or disabled.
        """
        return pulumi.get(self, "ntlm_v1")

    @ntlm_v1.setter
    def ntlm_v1(self, value: Optional[pulumi.Input[Union[str, 'NtlmV1']]]):
        pulumi.set(self, "ntlm_v1", value)

    @property
    @pulumi.getter(name="syncKerberosPasswords")
    def sync_kerberos_passwords(self) -> Optional[pulumi.Input[Union[str, 'SyncKerberosPasswords']]]:
        """
        A flag to determine whether or not SyncKerberosPasswords is enabled or disabled.
        """
        return pulumi.get(self, "sync_kerberos_passwords")

    @sync_kerberos_passwords.setter
    def sync_kerberos_passwords(self, value: Optional[pulumi.Input[Union[str, 'SyncKerberosPasswords']]]):
        pulumi.set(self, "sync_kerberos_passwords", value)

    @property
    @pulumi.getter(name="syncNtlmPasswords")
    def sync_ntlm_passwords(self) -> Optional[pulumi.Input[Union[str, 'SyncNtlmPasswords']]]:
        """
        A flag to determine whether or not SyncNtlmPasswords is enabled or disabled.
        """
        return pulumi.get(self, "sync_ntlm_passwords")

    @sync_ntlm_passwords.setter
    def sync_ntlm_passwords(self, value: Optional[pulumi.Input[Union[str, 'SyncNtlmPasswords']]]):
        pulumi.set(self, "sync_ntlm_passwords", value)

    @property
    @pulumi.getter(name="syncOnPremPasswords")
    def sync_on_prem_passwords(self) -> Optional[pulumi.Input[Union[str, 'SyncOnPremPasswords']]]:
        """
        A flag to determine whether or not SyncOnPremPasswords is enabled or disabled.
        """
        return pulumi.get(self, "sync_on_prem_passwords")

    @sync_on_prem_passwords.setter
    def sync_on_prem_passwords(self, value: Optional[pulumi.Input[Union[str, 'SyncOnPremPasswords']]]):
        pulumi.set(self, "sync_on_prem_passwords", value)

    @property
    @pulumi.getter(name="tlsV1")
    def tls_v1(self) -> Optional[pulumi.Input[Union[str, 'TlsV1']]]:
        """
        A flag to determine whether or not TlsV1 is enabled or disabled.
        """
        return pulumi.get(self, "tls_v1")

    @tls_v1.setter
    def tls_v1(self, value: Optional[pulumi.Input[Union[str, 'TlsV1']]]):
        pulumi.set(self, "tls_v1", value)


@pulumi.input_type
class ForestTrustArgs:
    def __init__(__self__, *,
                 friendly_name: Optional[pulumi.Input[str]] = None,
                 remote_dns_ips: Optional[pulumi.Input[str]] = None,
                 trust_direction: Optional[pulumi.Input[str]] = None,
                 trust_password: Optional[pulumi.Input[str]] = None,
                 trusted_domain_fqdn: Optional[pulumi.Input[str]] = None):
        """
        Forest Trust Setting
        :param pulumi.Input[str] friendly_name: Friendly Name
        :param pulumi.Input[str] remote_dns_ips: Remote Dns ips
        :param pulumi.Input[str] trust_direction: Trust Direction
        :param pulumi.Input[str] trust_password: Trust Password
        :param pulumi.Input[str] trusted_domain_fqdn: Trusted Domain FQDN
        """
        if friendly_name is not None:
            pulumi.set(__self__, "friendly_name", friendly_name)
        if remote_dns_ips is not None:
            pulumi.set(__self__, "remote_dns_ips", remote_dns_ips)
        if trust_direction is not None:
            pulumi.set(__self__, "trust_direction", trust_direction)
        if trust_password is not None:
            pulumi.set(__self__, "trust_password", trust_password)
        if trusted_domain_fqdn is not None:
            pulumi.set(__self__, "trusted_domain_fqdn", trusted_domain_fqdn)

    @property
    @pulumi.getter(name="friendlyName")
    def friendly_name(self) -> Optional[pulumi.Input[str]]:
        """
        Friendly Name
        """
        return pulumi.get(self, "friendly_name")

    @friendly_name.setter
    def friendly_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "friendly_name", value)

    @property
    @pulumi.getter(name="remoteDnsIps")
    def remote_dns_ips(self) -> Optional[pulumi.Input[str]]:
        """
        Remote Dns ips
        """
        return pulumi.get(self, "remote_dns_ips")

    @remote_dns_ips.setter
    def remote_dns_ips(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "remote_dns_ips", value)

    @property
    @pulumi.getter(name="trustDirection")
    def trust_direction(self) -> Optional[pulumi.Input[str]]:
        """
        Trust Direction
        """
        return pulumi.get(self, "trust_direction")

    @trust_direction.setter
    def trust_direction(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "trust_direction", value)

    @property
    @pulumi.getter(name="trustPassword")
    def trust_password(self) -> Optional[pulumi.Input[str]]:
        """
        Trust Password
        """
        return pulumi.get(self, "trust_password")

    @trust_password.setter
    def trust_password(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "trust_password", value)

    @property
    @pulumi.getter(name="trustedDomainFqdn")
    def trusted_domain_fqdn(self) -> Optional[pulumi.Input[str]]:
        """
        Trusted Domain FQDN
        """
        return pulumi.get(self, "trusted_domain_fqdn")

    @trusted_domain_fqdn.setter
    def trusted_domain_fqdn(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "trusted_domain_fqdn", value)


@pulumi.input_type
class LdapsSettingsArgs:
    def __init__(__self__, *,
                 external_access: Optional[pulumi.Input[Union[str, 'ExternalAccess']]] = None,
                 ldaps: Optional[pulumi.Input[Union[str, 'Ldaps']]] = None,
                 pfx_certificate: Optional[pulumi.Input[str]] = None,
                 pfx_certificate_password: Optional[pulumi.Input[str]] = None):
        """
        Secure LDAP Settings
        :param pulumi.Input[Union[str, 'ExternalAccess']] external_access: A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
        :param pulumi.Input[Union[str, 'Ldaps']] ldaps: A flag to determine whether or not Secure LDAP is enabled or disabled.
        :param pulumi.Input[str] pfx_certificate: The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
        :param pulumi.Input[str] pfx_certificate_password: The password to decrypt the provided Secure LDAP certificate pfx file.
        """
        if external_access is not None:
            pulumi.set(__self__, "external_access", external_access)
        if ldaps is not None:
            pulumi.set(__self__, "ldaps", ldaps)
        if pfx_certificate is not None:
            pulumi.set(__self__, "pfx_certificate", pfx_certificate)
        if pfx_certificate_password is not None:
            pulumi.set(__self__, "pfx_certificate_password", pfx_certificate_password)

    @property
    @pulumi.getter(name="externalAccess")
    def external_access(self) -> Optional[pulumi.Input[Union[str, 'ExternalAccess']]]:
        """
        A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled.
        """
        return pulumi.get(self, "external_access")

    @external_access.setter
    def external_access(self, value: Optional[pulumi.Input[Union[str, 'ExternalAccess']]]):
        pulumi.set(self, "external_access", value)

    @property
    @pulumi.getter
    def ldaps(self) -> Optional[pulumi.Input[Union[str, 'Ldaps']]]:
        """
        A flag to determine whether or not Secure LDAP is enabled or disabled.
        """
        return pulumi.get(self, "ldaps")

    @ldaps.setter
    def ldaps(self, value: Optional[pulumi.Input[Union[str, 'Ldaps']]]):
        pulumi.set(self, "ldaps", value)

    @property
    @pulumi.getter(name="pfxCertificate")
    def pfx_certificate(self) -> Optional[pulumi.Input[str]]:
        """
        The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file.
        """
        return pulumi.get(self, "pfx_certificate")

    @pfx_certificate.setter
    def pfx_certificate(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "pfx_certificate", value)

    @property
    @pulumi.getter(name="pfxCertificatePassword")
    def pfx_certificate_password(self) -> Optional[pulumi.Input[str]]:
        """
        The password to decrypt the provided Secure LDAP certificate pfx file.
        """
        return pulumi.get(self, "pfx_certificate_password")

    @pfx_certificate_password.setter
    def pfx_certificate_password(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "pfx_certificate_password", value)


@pulumi.input_type
class NotificationSettingsArgs:
    def __init__(__self__, *,
                 additional_recipients: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 notify_dc_admins: Optional[pulumi.Input[Union[str, 'NotifyDcAdmins']]] = None,
                 notify_global_admins: Optional[pulumi.Input[Union[str, 'NotifyGlobalAdmins']]] = None):
        """
        Settings for notification
        :param pulumi.Input[Sequence[pulumi.Input[str]]] additional_recipients: The list of additional recipients
        :param pulumi.Input[Union[str, 'NotifyDcAdmins']] notify_dc_admins: Should domain controller admins be notified
        :param pulumi.Input[Union[str, 'NotifyGlobalAdmins']] notify_global_admins: Should global admins be notified
        """
        if additional_recipients is not None:
            pulumi.set(__self__, "additional_recipients", additional_recipients)
        if notify_dc_admins is not None:
            pulumi.set(__self__, "notify_dc_admins", notify_dc_admins)
        if notify_global_admins is not None:
            pulumi.set(__self__, "notify_global_admins", notify_global_admins)

    @property
    @pulumi.getter(name="additionalRecipients")
    def additional_recipients(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]:
        """
        The list of additional recipients
        """
        return pulumi.get(self, "additional_recipients")

    @additional_recipients.setter
    def additional_recipients(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]]):
        pulumi.set(self, "additional_recipients", value)

    @property
    @pulumi.getter(name="notifyDcAdmins")
    def notify_dc_admins(self) -> Optional[pulumi.Input[Union[str, 'NotifyDcAdmins']]]:
        """
        Should domain controller admins be notified
        """
        return pulumi.get(self, "notify_dc_admins")

    @notify_dc_admins.setter
    def notify_dc_admins(self, value: Optional[pulumi.Input[Union[str, 'NotifyDcAdmins']]]):
        pulumi.set(self, "notify_dc_admins", value)

    @property
    @pulumi.getter(name="notifyGlobalAdmins")
    def notify_global_admins(self) -> Optional[pulumi.Input[Union[str, 'NotifyGlobalAdmins']]]:
        """
        Should global admins be notified
        """
        return pulumi.get(self, "notify_global_admins")

    @notify_global_admins.setter
    def notify_global_admins(self, value: Optional[pulumi.Input[Union[str, 'NotifyGlobalAdmins']]]):
        pulumi.set(self, "notify_global_admins", value)


@pulumi.input_type
class ResourceForestSettingsArgs:
    def __init__(__self__, *,
                 resource_forest: Optional[pulumi.Input[str]] = None,
                 settings: Optional[pulumi.Input[Sequence[pulumi.Input['ForestTrustArgs']]]] = None):
        """
        Settings for Resource Forest
        :param pulumi.Input[str] resource_forest: Resource Forest
        :param pulumi.Input[Sequence[pulumi.Input['ForestTrustArgs']]] settings: List of settings for Resource Forest
        """
        if resource_forest is not None:
            pulumi.set(__self__, "resource_forest", resource_forest)
        if settings is not None:
            pulumi.set(__self__, "settings", settings)

    @property
    @pulumi.getter(name="resourceForest")
    def resource_forest(self) -> Optional[pulumi.Input[str]]:
        """
        Resource Forest
        """
        return pulumi.get(self, "resource_forest")

    @resource_forest.setter
    def resource_forest(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resource_forest", value)

    @property
    @pulumi.getter
    def settings(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['ForestTrustArgs']]]]:
        """
        List of settings for Resource Forest
        """
        return pulumi.get(self, "settings")

    @settings.setter
    def settings(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['ForestTrustArgs']]]]):
        pulumi.set(self, "settings", value)


