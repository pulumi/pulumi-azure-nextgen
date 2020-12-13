// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Batch.V20190801
{
    public static class GetApplicationPackage
    {
        public static Task<GetApplicationPackageResult> InvokeAsync(GetApplicationPackageArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApplicationPackageResult>("azure-nextgen:batch/v20190801:getApplicationPackage", args ?? new GetApplicationPackageArgs(), options.WithVersion());
    }


    public sealed class GetApplicationPackageArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Batch account.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the application. This must be unique within the account.
        /// </summary>
        [Input("applicationName", required: true)]
        public string ApplicationName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the Batch account.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The version of the application.
        /// </summary>
        [Input("versionName", required: true)]
        public string VersionName { get; set; } = null!;

        public GetApplicationPackageArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApplicationPackageResult
    {
        /// <summary>
        /// The ETag of the resource, used for concurrency statements.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The format of the application package, if the package is active.
        /// </summary>
        public readonly string Format;
        /// <summary>
        /// The ID of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The time at which the package was last activated, if the package is active.
        /// </summary>
        public readonly string LastActivationTime;
        /// <summary>
        /// The name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The current state of the application package.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// The URL for the application package in Azure Storage.
        /// </summary>
        public readonly string StorageUrl;
        /// <summary>
        /// The UTC time at which the Azure Storage URL will expire.
        /// </summary>
        public readonly string StorageUrlExpiry;
        /// <summary>
        /// The type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetApplicationPackageResult(
            string etag,

            string format,

            string id,

            string lastActivationTime,

            string name,

            string state,

            string storageUrl,

            string storageUrlExpiry,

            string type)
        {
            Etag = etag;
            Format = format;
            Id = id;
            LastActivationTime = lastActivationTime;
            Name = name;
            State = state;
            StorageUrl = storageUrl;
            StorageUrlExpiry = storageUrlExpiry;
            Type = type;
        }
    }
}
