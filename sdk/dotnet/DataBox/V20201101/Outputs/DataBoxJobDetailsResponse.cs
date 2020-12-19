// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBox.V20201101.Outputs
{

    [OutputType]
    public sealed class DataBoxJobDetailsResponse
    {
        /// <summary>
        /// Shared access key to download the chain of custody logs
        /// </summary>
        public readonly string ChainOfCustodySasKey;
        /// <summary>
        /// Contact details for notification and shipping.
        /// </summary>
        public readonly Outputs.ContactDetailsResponse ContactDetails;
        /// <summary>
        /// List of copy log details.
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.DataBoxAccountCopyLogDetailsResponse, Union<Outputs.DataBoxDiskCopyLogDetailsResponse, Outputs.DataBoxHeavyAccountCopyLogDetailsResponse>>> CopyLogDetails;
        /// <summary>
        /// Copy progress per storage account.
        /// </summary>
        public readonly ImmutableArray<Outputs.CopyProgressResponse> CopyProgress;
        /// <summary>
        /// Details of the data to be exported from azure.
        /// </summary>
        public readonly ImmutableArray<Outputs.DataExportDetailsResponse> DataExportDetails;
        /// <summary>
        /// Details of the data to be imported into azure.
        /// </summary>
        public readonly ImmutableArray<Outputs.DataImportDetailsResponse> DataImportDetails;
        /// <summary>
        /// Delivery package shipping details.
        /// </summary>
        public readonly Outputs.PackageShippingDetailsResponse DeliveryPackage;
        /// <summary>
        /// Set Device password for unlocking Databox. Should not be passed for TransferType:ExportFromAzure jobs. If this is not passed, the service will generate password itself. This will not be returned in Get Call. Password Requirements :  Password must be minimum of 12 and maximum of 64 characters. Password must have at least one uppercase alphabet, one number and one special character. Password cannot have the following characters : IilLoO0 Password can have only alphabets, numbers and these characters : @#\-$%^!+=;:_()]+
        /// </summary>
        public readonly string? DevicePassword;
        /// <summary>
        /// The expected size of the data, which needs to be transferred in this job, in terabytes.
        /// </summary>
        public readonly int? ExpectedDataSizeInTerabytes;
        /// <summary>
        /// Indicates the type of job details.
        /// Expected value is 'DataBox'.
        /// </summary>
        public readonly string JobDetailsType;
        /// <summary>
        /// List of stages that run in the job.
        /// </summary>
        public readonly ImmutableArray<Outputs.JobStagesResponse> JobStages;
        /// <summary>
        /// Details about which key encryption type is being used.
        /// </summary>
        public readonly Outputs.KeyEncryptionKeyResponse KeyEncryptionKey;
        /// <summary>
        /// Preferences for the order.
        /// </summary>
        public readonly Outputs.PreferencesResponse? Preferences;
        /// <summary>
        /// Return package shipping details.
        /// </summary>
        public readonly Outputs.PackageShippingDetailsResponse ReturnPackage;
        /// <summary>
        /// Shared access key to download the return shipment label
        /// </summary>
        public readonly string ReverseShipmentLabelSasKey;
        /// <summary>
        /// Shipping address of the customer.
        /// </summary>
        public readonly Outputs.ShippingAddressResponse? ShippingAddress;

        [OutputConstructor]
        private DataBoxJobDetailsResponse(
            string chainOfCustodySasKey,

            Outputs.ContactDetailsResponse contactDetails,

            ImmutableArray<Union<Outputs.DataBoxAccountCopyLogDetailsResponse, Union<Outputs.DataBoxDiskCopyLogDetailsResponse, Outputs.DataBoxHeavyAccountCopyLogDetailsResponse>>> copyLogDetails,

            ImmutableArray<Outputs.CopyProgressResponse> copyProgress,

            ImmutableArray<Outputs.DataExportDetailsResponse> dataExportDetails,

            ImmutableArray<Outputs.DataImportDetailsResponse> dataImportDetails,

            Outputs.PackageShippingDetailsResponse deliveryPackage,

            string? devicePassword,

            int? expectedDataSizeInTerabytes,

            string jobDetailsType,

            ImmutableArray<Outputs.JobStagesResponse> jobStages,

            Outputs.KeyEncryptionKeyResponse keyEncryptionKey,

            Outputs.PreferencesResponse? preferences,

            Outputs.PackageShippingDetailsResponse returnPackage,

            string reverseShipmentLabelSasKey,

            Outputs.ShippingAddressResponse? shippingAddress)
        {
            ChainOfCustodySasKey = chainOfCustodySasKey;
            ContactDetails = contactDetails;
            CopyLogDetails = copyLogDetails;
            CopyProgress = copyProgress;
            DataExportDetails = dataExportDetails;
            DataImportDetails = dataImportDetails;
            DeliveryPackage = deliveryPackage;
            DevicePassword = devicePassword;
            ExpectedDataSizeInTerabytes = expectedDataSizeInTerabytes;
            JobDetailsType = jobDetailsType;
            JobStages = jobStages;
            KeyEncryptionKey = keyEncryptionKey;
            Preferences = preferences;
            ReturnPackage = returnPackage;
            ReverseShipmentLabelSasKey = reverseShipmentLabelSasKey;
            ShippingAddress = shippingAddress;
        }
    }
}
