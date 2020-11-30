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
    'DeliveryPackageInformationResponse',
    'DriveBitLockerKeyResponseResult',
    'DriveStatusResponse',
    'EncryptionKeyDetailsResponse',
    'ExportResponse',
    'IdentityDetailsResponse',
    'JobDetailsResponse',
    'PackageInformationResponse',
    'ReturnAddressResponse',
    'ReturnShippingResponse',
    'ShippingInformationResponse',
]

@pulumi.output_type
class DeliveryPackageInformationResponse(dict):
    """
    Contains information about the delivery package being shipped by the customer to the Microsoft data center.
    """
    def __init__(__self__, *,
                 carrier_name: str,
                 tracking_number: str,
                 drive_count: Optional[int] = None,
                 ship_date: Optional[str] = None):
        """
        Contains information about the delivery package being shipped by the customer to the Microsoft data center.
        :param str carrier_name: The name of the carrier that is used to ship the import or export drives.
        :param str tracking_number: The tracking number of the package.
        :param int drive_count: The number of drives included in the package.
        :param str ship_date: The date when the package is shipped.
        """
        pulumi.set(__self__, "carrier_name", carrier_name)
        pulumi.set(__self__, "tracking_number", tracking_number)
        if drive_count is not None:
            pulumi.set(__self__, "drive_count", drive_count)
        if ship_date is not None:
            pulumi.set(__self__, "ship_date", ship_date)

    @property
    @pulumi.getter(name="carrierName")
    def carrier_name(self) -> str:
        """
        The name of the carrier that is used to ship the import or export drives.
        """
        return pulumi.get(self, "carrier_name")

    @property
    @pulumi.getter(name="trackingNumber")
    def tracking_number(self) -> str:
        """
        The tracking number of the package.
        """
        return pulumi.get(self, "tracking_number")

    @property
    @pulumi.getter(name="driveCount")
    def drive_count(self) -> Optional[int]:
        """
        The number of drives included in the package.
        """
        return pulumi.get(self, "drive_count")

    @property
    @pulumi.getter(name="shipDate")
    def ship_date(self) -> Optional[str]:
        """
        The date when the package is shipped.
        """
        return pulumi.get(self, "ship_date")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DriveBitLockerKeyResponseResult(dict):
    """
    BitLocker recovery key or password to the specified drive
    """
    def __init__(__self__, *,
                 bit_locker_key: Optional[str] = None,
                 drive_id: Optional[str] = None):
        """
        BitLocker recovery key or password to the specified drive
        :param str bit_locker_key: BitLocker recovery key or password
        :param str drive_id: Drive ID
        """
        if bit_locker_key is not None:
            pulumi.set(__self__, "bit_locker_key", bit_locker_key)
        if drive_id is not None:
            pulumi.set(__self__, "drive_id", drive_id)

    @property
    @pulumi.getter(name="bitLockerKey")
    def bit_locker_key(self) -> Optional[str]:
        """
        BitLocker recovery key or password
        """
        return pulumi.get(self, "bit_locker_key")

    @property
    @pulumi.getter(name="driveId")
    def drive_id(self) -> Optional[str]:
        """
        Drive ID
        """
        return pulumi.get(self, "drive_id")


@pulumi.output_type
class DriveStatusResponse(dict):
    """
    Provides information about the drive's status
    """
    def __init__(__self__, *,
                 bit_locker_key: Optional[str] = None,
                 bytes_succeeded: Optional[int] = None,
                 copy_status: Optional[str] = None,
                 drive_header_hash: Optional[str] = None,
                 drive_id: Optional[str] = None,
                 error_log_uri: Optional[str] = None,
                 manifest_file: Optional[str] = None,
                 manifest_hash: Optional[str] = None,
                 manifest_uri: Optional[str] = None,
                 percent_complete: Optional[int] = None,
                 state: Optional[str] = None,
                 verbose_log_uri: Optional[str] = None):
        """
        Provides information about the drive's status
        :param str bit_locker_key: The BitLocker key used to encrypt the drive.
        :param int bytes_succeeded: Bytes successfully transferred for the drive.
        :param str copy_status: Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
        :param str drive_header_hash: The drive header hash value.
        :param str drive_id: The drive's hardware serial number, without spaces.
        :param str error_log_uri: A URI that points to the blob containing the error log for the data transfer operation.
        :param str manifest_file: The relative path of the manifest file on the drive. 
        :param str manifest_hash: The Base16-encoded MD5 hash of the manifest file on the drive.
        :param str manifest_uri: A URI that points to the blob containing the drive manifest file. 
        :param int percent_complete: Percentage completed for the drive. 
        :param str state: The drive's current state. 
        :param str verbose_log_uri: A URI that points to the blob containing the verbose log for the data transfer operation. 
        """
        if bit_locker_key is not None:
            pulumi.set(__self__, "bit_locker_key", bit_locker_key)
        if bytes_succeeded is not None:
            pulumi.set(__self__, "bytes_succeeded", bytes_succeeded)
        if copy_status is not None:
            pulumi.set(__self__, "copy_status", copy_status)
        if drive_header_hash is not None:
            pulumi.set(__self__, "drive_header_hash", drive_header_hash)
        if drive_id is not None:
            pulumi.set(__self__, "drive_id", drive_id)
        if error_log_uri is not None:
            pulumi.set(__self__, "error_log_uri", error_log_uri)
        if manifest_file is not None:
            pulumi.set(__self__, "manifest_file", manifest_file)
        if manifest_hash is not None:
            pulumi.set(__self__, "manifest_hash", manifest_hash)
        if manifest_uri is not None:
            pulumi.set(__self__, "manifest_uri", manifest_uri)
        if percent_complete is not None:
            pulumi.set(__self__, "percent_complete", percent_complete)
        if state is not None:
            pulumi.set(__self__, "state", state)
        if verbose_log_uri is not None:
            pulumi.set(__self__, "verbose_log_uri", verbose_log_uri)

    @property
    @pulumi.getter(name="bitLockerKey")
    def bit_locker_key(self) -> Optional[str]:
        """
        The BitLocker key used to encrypt the drive.
        """
        return pulumi.get(self, "bit_locker_key")

    @property
    @pulumi.getter(name="bytesSucceeded")
    def bytes_succeeded(self) -> Optional[int]:
        """
        Bytes successfully transferred for the drive.
        """
        return pulumi.get(self, "bytes_succeeded")

    @property
    @pulumi.getter(name="copyStatus")
    def copy_status(self) -> Optional[str]:
        """
        Detailed status about the data transfer process. This field is not returned in the response until the drive is in the Transferring state.
        """
        return pulumi.get(self, "copy_status")

    @property
    @pulumi.getter(name="driveHeaderHash")
    def drive_header_hash(self) -> Optional[str]:
        """
        The drive header hash value.
        """
        return pulumi.get(self, "drive_header_hash")

    @property
    @pulumi.getter(name="driveId")
    def drive_id(self) -> Optional[str]:
        """
        The drive's hardware serial number, without spaces.
        """
        return pulumi.get(self, "drive_id")

    @property
    @pulumi.getter(name="errorLogUri")
    def error_log_uri(self) -> Optional[str]:
        """
        A URI that points to the blob containing the error log for the data transfer operation.
        """
        return pulumi.get(self, "error_log_uri")

    @property
    @pulumi.getter(name="manifestFile")
    def manifest_file(self) -> Optional[str]:
        """
        The relative path of the manifest file on the drive. 
        """
        return pulumi.get(self, "manifest_file")

    @property
    @pulumi.getter(name="manifestHash")
    def manifest_hash(self) -> Optional[str]:
        """
        The Base16-encoded MD5 hash of the manifest file on the drive.
        """
        return pulumi.get(self, "manifest_hash")

    @property
    @pulumi.getter(name="manifestUri")
    def manifest_uri(self) -> Optional[str]:
        """
        A URI that points to the blob containing the drive manifest file. 
        """
        return pulumi.get(self, "manifest_uri")

    @property
    @pulumi.getter(name="percentComplete")
    def percent_complete(self) -> Optional[int]:
        """
        Percentage completed for the drive. 
        """
        return pulumi.get(self, "percent_complete")

    @property
    @pulumi.getter
    def state(self) -> Optional[str]:
        """
        The drive's current state. 
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter(name="verboseLogUri")
    def verbose_log_uri(self) -> Optional[str]:
        """
        A URI that points to the blob containing the verbose log for the data transfer operation. 
        """
        return pulumi.get(self, "verbose_log_uri")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EncryptionKeyDetailsResponse(dict):
    """
    Specifies the encryption key properties
    """
    def __init__(__self__, *,
                 kek_type: Optional[str] = None,
                 kek_url: Optional[str] = None,
                 kek_vault_resource_id: Optional[str] = None):
        """
        Specifies the encryption key properties
        :param str kek_type: The type of kek encryption key
        :param str kek_url: Specifies the url for kek encryption key. 
        :param str kek_vault_resource_id: Specifies the keyvault resource id for kek encryption key. 
        """
        if kek_type is not None:
            pulumi.set(__self__, "kek_type", kek_type)
        if kek_url is not None:
            pulumi.set(__self__, "kek_url", kek_url)
        if kek_vault_resource_id is not None:
            pulumi.set(__self__, "kek_vault_resource_id", kek_vault_resource_id)

    @property
    @pulumi.getter(name="kekType")
    def kek_type(self) -> Optional[str]:
        """
        The type of kek encryption key
        """
        return pulumi.get(self, "kek_type")

    @property
    @pulumi.getter(name="kekUrl")
    def kek_url(self) -> Optional[str]:
        """
        Specifies the url for kek encryption key. 
        """
        return pulumi.get(self, "kek_url")

    @property
    @pulumi.getter(name="kekVaultResourceID")
    def kek_vault_resource_id(self) -> Optional[str]:
        """
        Specifies the keyvault resource id for kek encryption key. 
        """
        return pulumi.get(self, "kek_vault_resource_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ExportResponse(dict):
    """
    A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.
    """
    def __init__(__self__, *,
                 blob_list_blob_path: Optional[str] = None,
                 blob_path: Optional[Sequence[str]] = None,
                 blob_path_prefix: Optional[Sequence[str]] = None):
        """
        A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs.
        :param str blob_list_blob_path: The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. 
        :param Sequence[str] blob_path: A collection of blob-path strings.
        :param Sequence[str] blob_path_prefix: A collection of blob-prefix strings.
        """
        if blob_list_blob_path is not None:
            pulumi.set(__self__, "blob_list_blob_path", blob_list_blob_path)
        if blob_path is not None:
            pulumi.set(__self__, "blob_path", blob_path)
        if blob_path_prefix is not None:
            pulumi.set(__self__, "blob_path_prefix", blob_path_prefix)

    @property
    @pulumi.getter(name="blobListBlobPath")
    def blob_list_blob_path(self) -> Optional[str]:
        """
        The relative URI to the block blob that contains the list of blob paths or blob path prefixes as defined above, beginning with the container name. If the blob is in root container, the URI must begin with $root. 
        """
        return pulumi.get(self, "blob_list_blob_path")

    @property
    @pulumi.getter(name="blobPath")
    def blob_path(self) -> Optional[Sequence[str]]:
        """
        A collection of blob-path strings.
        """
        return pulumi.get(self, "blob_path")

    @property
    @pulumi.getter(name="blobPathPrefix")
    def blob_path_prefix(self) -> Optional[Sequence[str]]:
        """
        A collection of blob-prefix strings.
        """
        return pulumi.get(self, "blob_path_prefix")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class IdentityDetailsResponse(dict):
    """
    Specifies the identity properties. 
    """
    def __init__(__self__, *,
                 principal_id: str,
                 tenant_id: str,
                 type: Optional[str] = None):
        """
        Specifies the identity properties. 
        :param str principal_id: Specifies the principal id for the identity for the job. 
        :param str tenant_id: Specifies the tenant id for the identity for the job. 
        :param str type: The type of identity
        """
        pulumi.set(__self__, "principal_id", principal_id)
        pulumi.set(__self__, "tenant_id", tenant_id)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter(name="principalId")
    def principal_id(self) -> str:
        """
        Specifies the principal id for the identity for the job. 
        """
        return pulumi.get(self, "principal_id")

    @property
    @pulumi.getter(name="tenantId")
    def tenant_id(self) -> str:
        """
        Specifies the tenant id for the identity for the job. 
        """
        return pulumi.get(self, "tenant_id")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of identity
        """
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class JobDetailsResponse(dict):
    """
    Specifies the job properties
    """
    def __init__(__self__, *,
                 backup_drive_manifest: Optional[bool] = None,
                 cancel_requested: Optional[bool] = None,
                 delivery_package: Optional['outputs.DeliveryPackageInformationResponse'] = None,
                 diagnostics_path: Optional[str] = None,
                 drive_list: Optional[Sequence['outputs.DriveStatusResponse']] = None,
                 encryption_key: Optional['outputs.EncryptionKeyDetailsResponse'] = None,
                 export: Optional['outputs.ExportResponse'] = None,
                 incomplete_blob_list_uri: Optional[str] = None,
                 job_type: Optional[str] = None,
                 log_level: Optional[str] = None,
                 percent_complete: Optional[int] = None,
                 provisioning_state: Optional[str] = None,
                 return_address: Optional['outputs.ReturnAddressResponse'] = None,
                 return_package: Optional['outputs.PackageInformationResponse'] = None,
                 return_shipping: Optional['outputs.ReturnShippingResponse'] = None,
                 shipping_information: Optional['outputs.ShippingInformationResponse'] = None,
                 state: Optional[str] = None,
                 storage_account_id: Optional[str] = None):
        """
        Specifies the job properties
        :param bool backup_drive_manifest: Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
        :param bool cancel_requested: Indicates whether a request has been submitted to cancel the job.
        :param 'DeliveryPackageInformationResponseArgs' delivery_package: Contains information about the package being shipped by the customer to the Microsoft data center. 
        :param str diagnostics_path: The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
        :param Sequence['DriveStatusResponseArgs'] drive_list: List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
        :param 'EncryptionKeyDetailsResponseArgs' encryption_key: Contains information about the encryption key.
        :param 'ExportResponseArgs' export: A property containing information about the blobs to be exported for an export job. This property is included for export jobs only.
        :param str incomplete_blob_list_uri: A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
        :param str job_type: The type of job
        :param str log_level: Default value is Error. Indicates whether error logging or verbose logging will be enabled.
        :param int percent_complete: Overall percentage completed for the job.
        :param str provisioning_state: Specifies the provisioning state of the job.
        :param 'ReturnAddressResponseArgs' return_address: Specifies the return address information for the job. 
        :param 'PackageInformationResponseArgs' return_package: Contains information about the package being shipped from the Microsoft data center to the customer to return the drives. The format is the same as the deliveryPackage property above. This property is not included if the drives have not yet been returned. 
        :param 'ReturnShippingResponseArgs' return_shipping: Specifies the return carrier and customer's account with the carrier. 
        :param 'ShippingInformationResponseArgs' shipping_information: Contains information about the Microsoft datacenter to which the drives should be shipped. 
        :param str state: Current state of the job.
        :param str storage_account_id: The resource identifier of the storage account where data will be imported to or exported from.
        """
        if backup_drive_manifest is not None:
            pulumi.set(__self__, "backup_drive_manifest", backup_drive_manifest)
        if cancel_requested is not None:
            pulumi.set(__self__, "cancel_requested", cancel_requested)
        if delivery_package is not None:
            pulumi.set(__self__, "delivery_package", delivery_package)
        if diagnostics_path is not None:
            pulumi.set(__self__, "diagnostics_path", diagnostics_path)
        if drive_list is not None:
            pulumi.set(__self__, "drive_list", drive_list)
        if encryption_key is not None:
            pulumi.set(__self__, "encryption_key", encryption_key)
        if export is not None:
            pulumi.set(__self__, "export", export)
        if incomplete_blob_list_uri is not None:
            pulumi.set(__self__, "incomplete_blob_list_uri", incomplete_blob_list_uri)
        if job_type is not None:
            pulumi.set(__self__, "job_type", job_type)
        if log_level is not None:
            pulumi.set(__self__, "log_level", log_level)
        if percent_complete is not None:
            pulumi.set(__self__, "percent_complete", percent_complete)
        if provisioning_state is not None:
            pulumi.set(__self__, "provisioning_state", provisioning_state)
        if return_address is not None:
            pulumi.set(__self__, "return_address", return_address)
        if return_package is not None:
            pulumi.set(__self__, "return_package", return_package)
        if return_shipping is not None:
            pulumi.set(__self__, "return_shipping", return_shipping)
        if shipping_information is not None:
            pulumi.set(__self__, "shipping_information", shipping_information)
        if state is not None:
            pulumi.set(__self__, "state", state)
        if storage_account_id is not None:
            pulumi.set(__self__, "storage_account_id", storage_account_id)

    @property
    @pulumi.getter(name="backupDriveManifest")
    def backup_drive_manifest(self) -> Optional[bool]:
        """
        Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
        """
        return pulumi.get(self, "backup_drive_manifest")

    @property
    @pulumi.getter(name="cancelRequested")
    def cancel_requested(self) -> Optional[bool]:
        """
        Indicates whether a request has been submitted to cancel the job.
        """
        return pulumi.get(self, "cancel_requested")

    @property
    @pulumi.getter(name="deliveryPackage")
    def delivery_package(self) -> Optional['outputs.DeliveryPackageInformationResponse']:
        """
        Contains information about the package being shipped by the customer to the Microsoft data center. 
        """
        return pulumi.get(self, "delivery_package")

    @property
    @pulumi.getter(name="diagnosticsPath")
    def diagnostics_path(self) -> Optional[str]:
        """
        The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
        """
        return pulumi.get(self, "diagnostics_path")

    @property
    @pulumi.getter(name="driveList")
    def drive_list(self) -> Optional[Sequence['outputs.DriveStatusResponse']]:
        """
        List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
        """
        return pulumi.get(self, "drive_list")

    @property
    @pulumi.getter(name="encryptionKey")
    def encryption_key(self) -> Optional['outputs.EncryptionKeyDetailsResponse']:
        """
        Contains information about the encryption key.
        """
        return pulumi.get(self, "encryption_key")

    @property
    @pulumi.getter
    def export(self) -> Optional['outputs.ExportResponse']:
        """
        A property containing information about the blobs to be exported for an export job. This property is included for export jobs only.
        """
        return pulumi.get(self, "export")

    @property
    @pulumi.getter(name="incompleteBlobListUri")
    def incomplete_blob_list_uri(self) -> Optional[str]:
        """
        A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
        """
        return pulumi.get(self, "incomplete_blob_list_uri")

    @property
    @pulumi.getter(name="jobType")
    def job_type(self) -> Optional[str]:
        """
        The type of job
        """
        return pulumi.get(self, "job_type")

    @property
    @pulumi.getter(name="logLevel")
    def log_level(self) -> Optional[str]:
        """
        Default value is Error. Indicates whether error logging or verbose logging will be enabled.
        """
        return pulumi.get(self, "log_level")

    @property
    @pulumi.getter(name="percentComplete")
    def percent_complete(self) -> Optional[int]:
        """
        Overall percentage completed for the job.
        """
        return pulumi.get(self, "percent_complete")

    @property
    @pulumi.getter(name="provisioningState")
    def provisioning_state(self) -> Optional[str]:
        """
        Specifies the provisioning state of the job.
        """
        return pulumi.get(self, "provisioning_state")

    @property
    @pulumi.getter(name="returnAddress")
    def return_address(self) -> Optional['outputs.ReturnAddressResponse']:
        """
        Specifies the return address information for the job. 
        """
        return pulumi.get(self, "return_address")

    @property
    @pulumi.getter(name="returnPackage")
    def return_package(self) -> Optional['outputs.PackageInformationResponse']:
        """
        Contains information about the package being shipped from the Microsoft data center to the customer to return the drives. The format is the same as the deliveryPackage property above. This property is not included if the drives have not yet been returned. 
        """
        return pulumi.get(self, "return_package")

    @property
    @pulumi.getter(name="returnShipping")
    def return_shipping(self) -> Optional['outputs.ReturnShippingResponse']:
        """
        Specifies the return carrier and customer's account with the carrier. 
        """
        return pulumi.get(self, "return_shipping")

    @property
    @pulumi.getter(name="shippingInformation")
    def shipping_information(self) -> Optional['outputs.ShippingInformationResponse']:
        """
        Contains information about the Microsoft datacenter to which the drives should be shipped. 
        """
        return pulumi.get(self, "shipping_information")

    @property
    @pulumi.getter
    def state(self) -> Optional[str]:
        """
        Current state of the job.
        """
        return pulumi.get(self, "state")

    @property
    @pulumi.getter(name="storageAccountId")
    def storage_account_id(self) -> Optional[str]:
        """
        The resource identifier of the storage account where data will be imported to or exported from.
        """
        return pulumi.get(self, "storage_account_id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PackageInformationResponse(dict):
    """
    Contains information about the package being shipped by the customer to the Microsoft data center.
    """
    def __init__(__self__, *,
                 carrier_name: str,
                 drive_count: int,
                 ship_date: str,
                 tracking_number: str):
        """
        Contains information about the package being shipped by the customer to the Microsoft data center.
        :param str carrier_name: The name of the carrier that is used to ship the import or export drives.
        :param int drive_count: The number of drives included in the package.
        :param str ship_date: The date when the package is shipped.
        :param str tracking_number: The tracking number of the package.
        """
        pulumi.set(__self__, "carrier_name", carrier_name)
        pulumi.set(__self__, "drive_count", drive_count)
        pulumi.set(__self__, "ship_date", ship_date)
        pulumi.set(__self__, "tracking_number", tracking_number)

    @property
    @pulumi.getter(name="carrierName")
    def carrier_name(self) -> str:
        """
        The name of the carrier that is used to ship the import or export drives.
        """
        return pulumi.get(self, "carrier_name")

    @property
    @pulumi.getter(name="driveCount")
    def drive_count(self) -> int:
        """
        The number of drives included in the package.
        """
        return pulumi.get(self, "drive_count")

    @property
    @pulumi.getter(name="shipDate")
    def ship_date(self) -> str:
        """
        The date when the package is shipped.
        """
        return pulumi.get(self, "ship_date")

    @property
    @pulumi.getter(name="trackingNumber")
    def tracking_number(self) -> str:
        """
        The tracking number of the package.
        """
        return pulumi.get(self, "tracking_number")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ReturnAddressResponse(dict):
    """
    Specifies the return address information for the job.
    """
    def __init__(__self__, *,
                 city: str,
                 country_or_region: str,
                 email: str,
                 phone: str,
                 postal_code: str,
                 recipient_name: str,
                 street_address1: str,
                 state_or_province: Optional[str] = None,
                 street_address2: Optional[str] = None):
        """
        Specifies the return address information for the job.
        :param str city: The city name to use when returning the drives.
        :param str country_or_region: The country or region to use when returning the drives. 
        :param str email: Email address of the recipient of the returned drives.
        :param str phone: Phone number of the recipient of the returned drives.
        :param str postal_code: The postal code to use when returning the drives.
        :param str recipient_name: The name of the recipient who will receive the hard drives when they are returned. 
        :param str street_address1: The first line of the street address to use when returning the drives. 
        :param str state_or_province: The state or province to use when returning the drives.
        :param str street_address2: The second line of the street address to use when returning the drives. 
        """
        pulumi.set(__self__, "city", city)
        pulumi.set(__self__, "country_or_region", country_or_region)
        pulumi.set(__self__, "email", email)
        pulumi.set(__self__, "phone", phone)
        pulumi.set(__self__, "postal_code", postal_code)
        pulumi.set(__self__, "recipient_name", recipient_name)
        pulumi.set(__self__, "street_address1", street_address1)
        if state_or_province is not None:
            pulumi.set(__self__, "state_or_province", state_or_province)
        if street_address2 is not None:
            pulumi.set(__self__, "street_address2", street_address2)

    @property
    @pulumi.getter
    def city(self) -> str:
        """
        The city name to use when returning the drives.
        """
        return pulumi.get(self, "city")

    @property
    @pulumi.getter(name="countryOrRegion")
    def country_or_region(self) -> str:
        """
        The country or region to use when returning the drives. 
        """
        return pulumi.get(self, "country_or_region")

    @property
    @pulumi.getter
    def email(self) -> str:
        """
        Email address of the recipient of the returned drives.
        """
        return pulumi.get(self, "email")

    @property
    @pulumi.getter
    def phone(self) -> str:
        """
        Phone number of the recipient of the returned drives.
        """
        return pulumi.get(self, "phone")

    @property
    @pulumi.getter(name="postalCode")
    def postal_code(self) -> str:
        """
        The postal code to use when returning the drives.
        """
        return pulumi.get(self, "postal_code")

    @property
    @pulumi.getter(name="recipientName")
    def recipient_name(self) -> str:
        """
        The name of the recipient who will receive the hard drives when they are returned. 
        """
        return pulumi.get(self, "recipient_name")

    @property
    @pulumi.getter(name="streetAddress1")
    def street_address1(self) -> str:
        """
        The first line of the street address to use when returning the drives. 
        """
        return pulumi.get(self, "street_address1")

    @property
    @pulumi.getter(name="stateOrProvince")
    def state_or_province(self) -> Optional[str]:
        """
        The state or province to use when returning the drives.
        """
        return pulumi.get(self, "state_or_province")

    @property
    @pulumi.getter(name="streetAddress2")
    def street_address2(self) -> Optional[str]:
        """
        The second line of the street address to use when returning the drives. 
        """
        return pulumi.get(self, "street_address2")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ReturnShippingResponse(dict):
    """
    Specifies the return carrier and customer's account with the carrier.
    """
    def __init__(__self__, *,
                 carrier_account_number: str,
                 carrier_name: str):
        """
        Specifies the return carrier and customer's account with the carrier.
        :param str carrier_account_number: The customer's account number with the carrier.
        :param str carrier_name: The carrier's name.
        """
        pulumi.set(__self__, "carrier_account_number", carrier_account_number)
        pulumi.set(__self__, "carrier_name", carrier_name)

    @property
    @pulumi.getter(name="carrierAccountNumber")
    def carrier_account_number(self) -> str:
        """
        The customer's account number with the carrier.
        """
        return pulumi.get(self, "carrier_account_number")

    @property
    @pulumi.getter(name="carrierName")
    def carrier_name(self) -> str:
        """
        The carrier's name.
        """
        return pulumi.get(self, "carrier_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ShippingInformationResponse(dict):
    """
    Contains information about the Microsoft datacenter to which the drives should be shipped.
    """
    def __init__(__self__, *,
                 additional_information: str,
                 city: str,
                 country_or_region: str,
                 postal_code: str,
                 recipient_name: str,
                 state_or_province: str,
                 street_address1: str,
                 phone: Optional[str] = None,
                 street_address2: Optional[str] = None):
        """
        Contains information about the Microsoft datacenter to which the drives should be shipped.
        :param str additional_information: Additional shipping information for customer, specific to datacenter to which customer should send their disks.
        :param str city: The city name to use when returning the drives.
        :param str country_or_region: The country or region to use when returning the drives. 
        :param str postal_code: The postal code to use when returning the drives.
        :param str recipient_name: The name of the recipient who will receive the hard drives when they are returned. 
        :param str state_or_province: The state or province to use when returning the drives.
        :param str street_address1: The first line of the street address to use when returning the drives. 
        :param str phone: Phone number of the recipient of the returned drives.
        :param str street_address2: The second line of the street address to use when returning the drives. 
        """
        pulumi.set(__self__, "additional_information", additional_information)
        pulumi.set(__self__, "city", city)
        pulumi.set(__self__, "country_or_region", country_or_region)
        pulumi.set(__self__, "postal_code", postal_code)
        pulumi.set(__self__, "recipient_name", recipient_name)
        pulumi.set(__self__, "state_or_province", state_or_province)
        pulumi.set(__self__, "street_address1", street_address1)
        if phone is not None:
            pulumi.set(__self__, "phone", phone)
        if street_address2 is not None:
            pulumi.set(__self__, "street_address2", street_address2)

    @property
    @pulumi.getter(name="additionalInformation")
    def additional_information(self) -> str:
        """
        Additional shipping information for customer, specific to datacenter to which customer should send their disks.
        """
        return pulumi.get(self, "additional_information")

    @property
    @pulumi.getter
    def city(self) -> str:
        """
        The city name to use when returning the drives.
        """
        return pulumi.get(self, "city")

    @property
    @pulumi.getter(name="countryOrRegion")
    def country_or_region(self) -> str:
        """
        The country or region to use when returning the drives. 
        """
        return pulumi.get(self, "country_or_region")

    @property
    @pulumi.getter(name="postalCode")
    def postal_code(self) -> str:
        """
        The postal code to use when returning the drives.
        """
        return pulumi.get(self, "postal_code")

    @property
    @pulumi.getter(name="recipientName")
    def recipient_name(self) -> str:
        """
        The name of the recipient who will receive the hard drives when they are returned. 
        """
        return pulumi.get(self, "recipient_name")

    @property
    @pulumi.getter(name="stateOrProvince")
    def state_or_province(self) -> str:
        """
        The state or province to use when returning the drives.
        """
        return pulumi.get(self, "state_or_province")

    @property
    @pulumi.getter(name="streetAddress1")
    def street_address1(self) -> str:
        """
        The first line of the street address to use when returning the drives. 
        """
        return pulumi.get(self, "street_address1")

    @property
    @pulumi.getter
    def phone(self) -> Optional[str]:
        """
        Phone number of the recipient of the returned drives.
        """
        return pulumi.get(self, "phone")

    @property
    @pulumi.getter(name="streetAddress2")
    def street_address2(self) -> Optional[str]:
        """
        The second line of the street address to use when returning the drives. 
        """
        return pulumi.get(self, "street_address2")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


