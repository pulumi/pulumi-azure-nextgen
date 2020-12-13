// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20170601
{
    public static class GetStorageAccountCredential
    {
        public static Task<GetStorageAccountCredentialResult> InvokeAsync(GetStorageAccountCredentialArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetStorageAccountCredentialResult>("azure-nextgen:storsimple/v20170601:getStorageAccountCredential", args ?? new GetStorageAccountCredentialArgs(), options.WithVersion());
    }


    public sealed class GetStorageAccountCredentialArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The manager name
        /// </summary>
        [Input("managerName", required: true)]
        public string ManagerName { get; set; } = null!;

        /// <summary>
        /// The resource group name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of storage account credential to be fetched.
        /// </summary>
        [Input("storageAccountCredentialName", required: true)]
        public string StorageAccountCredentialName { get; set; } = null!;

        public GetStorageAccountCredentialArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetStorageAccountCredentialResult
    {
        /// <summary>
        /// The details of the storage account password.
        /// </summary>
        public readonly Outputs.AsymmetricEncryptedSecretResponse? AccessKey;
        /// <summary>
        /// The storage endpoint
        /// </summary>
        public readonly string EndPoint;
        /// <summary>
        /// The path ID that uniquely identifies the object.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The Kind of the object. Currently only Series8000 is supported
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// The name of the object.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Signifies whether SSL needs to be enabled or not.
        /// </summary>
        public readonly string SslStatus;
        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The count of volumes using this storage account credential.
        /// </summary>
        public readonly int VolumesCount;

        [OutputConstructor]
        private GetStorageAccountCredentialResult(
            Outputs.AsymmetricEncryptedSecretResponse? accessKey,

            string endPoint,

            string id,

            string? kind,

            string name,

            string sslStatus,

            string type,

            int volumesCount)
        {
            AccessKey = accessKey;
            EndPoint = endPoint;
            Id = id;
            Kind = kind;
            Name = name;
            SslStatus = sslStatus;
            Type = type;
            VolumesCount = volumesCount;
        }
    }
}
