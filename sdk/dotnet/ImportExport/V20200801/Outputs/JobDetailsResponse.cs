// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ImportExport.V20200801.Outputs
{

    [OutputType]
    public sealed class JobDetailsResponse
    {
        /// <summary>
        /// Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs.
        /// </summary>
        public readonly bool? BackupDriveManifest;
        /// <summary>
        /// Indicates whether a request has been submitted to cancel the job.
        /// </summary>
        public readonly bool? CancelRequested;
        /// <summary>
        /// Contains information about the package being shipped by the customer to the Microsoft data center. 
        /// </summary>
        public readonly Outputs.DeliveryPackageInformationResponse? DeliveryPackage;
        /// <summary>
        /// The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored.
        /// </summary>
        public readonly string? DiagnosticsPath;
        /// <summary>
        /// List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs.
        /// </summary>
        public readonly ImmutableArray<Outputs.DriveStatusResponse> DriveList;
        /// <summary>
        /// Contains information about the encryption key.
        /// </summary>
        public readonly Outputs.EncryptionKeyDetailsResponse? EncryptionKey;
        /// <summary>
        /// A property containing information about the blobs to be exported for an export job. This property is included for export jobs only.
        /// </summary>
        public readonly Outputs.ExportResponse? Export;
        /// <summary>
        /// A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response.
        /// </summary>
        public readonly string? IncompleteBlobListUri;
        /// <summary>
        /// The type of job
        /// </summary>
        public readonly string? JobType;
        /// <summary>
        /// Default value is Error. Indicates whether error logging or verbose logging will be enabled.
        /// </summary>
        public readonly string? LogLevel;
        /// <summary>
        /// Overall percentage completed for the job.
        /// </summary>
        public readonly int? PercentComplete;
        /// <summary>
        /// Specifies the provisioning state of the job.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Specifies the return address information for the job. 
        /// </summary>
        public readonly Outputs.ReturnAddressResponse? ReturnAddress;
        /// <summary>
        /// Contains information about the package being shipped from the Microsoft data center to the customer to return the drives. The format is the same as the deliveryPackage property above. This property is not included if the drives have not yet been returned. 
        /// </summary>
        public readonly Outputs.PackageInformationResponse? ReturnPackage;
        /// <summary>
        /// Specifies the return carrier and customer's account with the carrier. 
        /// </summary>
        public readonly Outputs.ReturnShippingResponse? ReturnShipping;
        /// <summary>
        /// Contains information about the Microsoft datacenter to which the drives should be shipped. 
        /// </summary>
        public readonly Outputs.ShippingInformationResponse? ShippingInformation;
        /// <summary>
        /// Current state of the job.
        /// </summary>
        public readonly string? State;
        /// <summary>
        /// The resource identifier of the storage account where data will be imported to or exported from.
        /// </summary>
        public readonly string? StorageAccountId;

        [OutputConstructor]
        private JobDetailsResponse(
            bool? backupDriveManifest,

            bool? cancelRequested,

            Outputs.DeliveryPackageInformationResponse? deliveryPackage,

            string? diagnosticsPath,

            ImmutableArray<Outputs.DriveStatusResponse> driveList,

            Outputs.EncryptionKeyDetailsResponse? encryptionKey,

            Outputs.ExportResponse? export,

            string? incompleteBlobListUri,

            string? jobType,

            string? logLevel,

            int? percentComplete,

            string? provisioningState,

            Outputs.ReturnAddressResponse? returnAddress,

            Outputs.PackageInformationResponse? returnPackage,

            Outputs.ReturnShippingResponse? returnShipping,

            Outputs.ShippingInformationResponse? shippingInformation,

            string? state,

            string? storageAccountId)
        {
            BackupDriveManifest = backupDriveManifest;
            CancelRequested = cancelRequested;
            DeliveryPackage = deliveryPackage;
            DiagnosticsPath = diagnosticsPath;
            DriveList = driveList;
            EncryptionKey = encryptionKey;
            Export = export;
            IncompleteBlobListUri = incompleteBlobListUri;
            JobType = jobType;
            LogLevel = logLevel;
            PercentComplete = percentComplete;
            ProvisioningState = provisioningState;
            ReturnAddress = returnAddress;
            ReturnPackage = returnPackage;
            ReturnShipping = returnShipping;
            ShippingInformation = shippingInformation;
            State = state;
            StorageAccountId = storageAccountId;
        }
    }
}
