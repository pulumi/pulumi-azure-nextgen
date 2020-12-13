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
    'CreationDataResponse',
    'DiskSkuResponse',
    'EncryptionSettingsCollectionResponse',
    'EncryptionSettingsElementResponse',
    'ImageDiskReferenceResponse',
    'KeyVaultAndKeyReferenceResponse',
    'KeyVaultAndSecretReferenceResponse',
    'SnapshotSkuResponse',
    'SourceVaultResponse',
]

@pulumi.output_type
class CreationDataResponse(dict):
    """
    Data used when creating a disk.
    """
    def __init__(__self__, *,
                 create_option: str,
                 image_reference: Optional['outputs.ImageDiskReferenceResponse'] = None,
                 source_resource_id: Optional[str] = None,
                 source_uri: Optional[str] = None,
                 storage_account_id: Optional[str] = None):
        """
        Data used when creating a disk.
        :param str create_option: This enumerates the possible sources of a disk's creation.
        :param 'ImageDiskReferenceResponseArgs' image_reference: Disk source information.
        :param str source_resource_id: If createOption is Copy, this is the ARM id of the source snapshot or disk.
        :param str source_uri: If createOption is Import, this is the URI of a blob to be imported into a managed disk.
        :param str storage_account_id: If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription
        """
        pulumi.set(__self__, "create_option", create_option)
        if image_reference is not None:
            pulumi.set(__self__, "image_reference", image_reference)
        if source_resource_id is not None:
            pulumi.set(__self__, "source_resource_id", source_resource_id)
        if source_uri is not None:
            pulumi.set(__self__, "source_uri", source_uri)
        if storage_account_id is not None:
            pulumi.set(__self__, "storage_account_id", storage_account_id)

    @property
    @pulumi.getter(name="createOption")
    def create_option(self) -> str:
        """
        This enumerates the possible sources of a disk's creation.
        """
        return pulumi.get(self, "create_option")

    @property
    @pulumi.getter(name="imageReference")
    def image_reference(self) -> Optional['outputs.ImageDiskReferenceResponse']:
        """
        Disk source information.
        """
        return pulumi.get(self, "image_reference")

    @property
    @pulumi.getter(name="sourceResourceId")
    def source_resource_id(self) -> Optional[str]:
        """
        If createOption is Copy, this is the ARM id of the source snapshot or disk.
        """
        return pulumi.get(self, "source_resource_id")

    @property
    @pulumi.getter(name="sourceUri")
    def source_uri(self) -> Optional[str]:
        """
        If createOption is Import, this is the URI of a blob to be imported into a managed disk.
        """
        return pulumi.get(self, "source_uri")

    @property
    @pulumi.getter(name="storageAccountId")
    def storage_account_id(self) -> Optional[str]:
        """
        If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription
        """
        return pulumi.get(self, "storage_account_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DiskSkuResponse(dict):
    """
    The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
    """
    def __init__(__self__, *,
                 tier: str,
                 name: Optional[str] = None):
        """
        The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
        :param str tier: The sku tier.
        :param str name: The sku name.
        """
        pulumi.set(__self__, "tier", tier)
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def tier(self) -> str:
        """
        The sku tier.
        """
        return pulumi.get(self, "tier")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The sku name.
        """
        return pulumi.get(self, "name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EncryptionSettingsCollectionResponse(dict):
    """
    Encryption settings for disk or snapshot
    """
    def __init__(__self__, *,
                 enabled: bool,
                 encryption_settings: Optional[Sequence['outputs.EncryptionSettingsElementResponse']] = None):
        """
        Encryption settings for disk or snapshot
        :param bool enabled: Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
        :param Sequence['EncryptionSettingsElementResponseArgs'] encryption_settings: A collection of encryption settings, one for each disk volume.
        """
        pulumi.set(__self__, "enabled", enabled)
        if encryption_settings is not None:
            pulumi.set(__self__, "encryption_settings", encryption_settings)

    @property
    @pulumi.getter
    def enabled(self) -> bool:
        """
        Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="encryptionSettings")
    def encryption_settings(self) -> Optional[Sequence['outputs.EncryptionSettingsElementResponse']]:
        """
        A collection of encryption settings, one for each disk volume.
        """
        return pulumi.get(self, "encryption_settings")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EncryptionSettingsElementResponse(dict):
    """
    Encryption settings for one disk volume.
    """
    def __init__(__self__, *,
                 disk_encryption_key: Optional['outputs.KeyVaultAndSecretReferenceResponse'] = None,
                 key_encryption_key: Optional['outputs.KeyVaultAndKeyReferenceResponse'] = None):
        """
        Encryption settings for one disk volume.
        :param 'KeyVaultAndSecretReferenceResponseArgs' disk_encryption_key: Key Vault Secret Url and vault id of the disk encryption key
        :param 'KeyVaultAndKeyReferenceResponseArgs' key_encryption_key: Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
        """
        if disk_encryption_key is not None:
            pulumi.set(__self__, "disk_encryption_key", disk_encryption_key)
        if key_encryption_key is not None:
            pulumi.set(__self__, "key_encryption_key", key_encryption_key)

    @property
    @pulumi.getter(name="diskEncryptionKey")
    def disk_encryption_key(self) -> Optional['outputs.KeyVaultAndSecretReferenceResponse']:
        """
        Key Vault Secret Url and vault id of the disk encryption key
        """
        return pulumi.get(self, "disk_encryption_key")

    @property
    @pulumi.getter(name="keyEncryptionKey")
    def key_encryption_key(self) -> Optional['outputs.KeyVaultAndKeyReferenceResponse']:
        """
        Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key.
        """
        return pulumi.get(self, "key_encryption_key")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ImageDiskReferenceResponse(dict):
    """
    The source image used for creating the disk.
    """
    def __init__(__self__, *,
                 id: str,
                 lun: Optional[int] = None):
        """
        The source image used for creating the disk.
        :param str id: A relative uri containing either a Platform Image Repository or user image reference.
        :param int lun: If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
        """
        pulumi.set(__self__, "id", id)
        if lun is not None:
            pulumi.set(__self__, "lun", lun)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        A relative uri containing either a Platform Image Repository or user image reference.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def lun(self) -> Optional[int]:
        """
        If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null.
        """
        return pulumi.get(self, "lun")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class KeyVaultAndKeyReferenceResponse(dict):
    """
    Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
    """
    def __init__(__self__, *,
                 key_url: str,
                 source_vault: 'outputs.SourceVaultResponse'):
        """
        Key Vault Key Url and vault id of KeK, KeK is optional and when provided is used to unwrap the encryptionKey
        :param str key_url: Url pointing to a key or secret in KeyVault
        :param 'SourceVaultResponseArgs' source_vault: Resource id of the KeyVault containing the key or secret
        """
        pulumi.set(__self__, "key_url", key_url)
        pulumi.set(__self__, "source_vault", source_vault)

    @property
    @pulumi.getter(name="keyUrl")
    def key_url(self) -> str:
        """
        Url pointing to a key or secret in KeyVault
        """
        return pulumi.get(self, "key_url")

    @property
    @pulumi.getter(name="sourceVault")
    def source_vault(self) -> 'outputs.SourceVaultResponse':
        """
        Resource id of the KeyVault containing the key or secret
        """
        return pulumi.get(self, "source_vault")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class KeyVaultAndSecretReferenceResponse(dict):
    """
    Key Vault Secret Url and vault id of the encryption key 
    """
    def __init__(__self__, *,
                 secret_url: str,
                 source_vault: 'outputs.SourceVaultResponse'):
        """
        Key Vault Secret Url and vault id of the encryption key 
        :param str secret_url: Url pointing to a key or secret in KeyVault
        :param 'SourceVaultResponseArgs' source_vault: Resource id of the KeyVault containing the key or secret
        """
        pulumi.set(__self__, "secret_url", secret_url)
        pulumi.set(__self__, "source_vault", source_vault)

    @property
    @pulumi.getter(name="secretUrl")
    def secret_url(self) -> str:
        """
        Url pointing to a key or secret in KeyVault
        """
        return pulumi.get(self, "secret_url")

    @property
    @pulumi.getter(name="sourceVault")
    def source_vault(self) -> 'outputs.SourceVaultResponse':
        """
        Resource id of the KeyVault containing the key or secret
        """
        return pulumi.get(self, "source_vault")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SnapshotSkuResponse(dict):
    """
    The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
    """
    def __init__(__self__, *,
                 tier: str,
                 name: Optional[str] = None):
        """
        The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS.
        :param str tier: The sku tier.
        :param str name: The sku name.
        """
        pulumi.set(__self__, "tier", tier)
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def tier(self) -> str:
        """
        The sku tier.
        """
        return pulumi.get(self, "tier")

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The sku name.
        """
        return pulumi.get(self, "name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SourceVaultResponse(dict):
    """
    The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
    """
    def __init__(__self__, *,
                 id: Optional[str] = None):
        """
        The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
        :param str id: Resource Id
        """
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        Resource Id
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


