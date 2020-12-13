// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200601.Outputs
{

    [OutputType]
    public sealed class HttpLogsConfigResponse
    {
        /// <summary>
        /// Http logs to azure blob storage configuration.
        /// </summary>
        public readonly Outputs.AzureBlobStorageHttpLogsConfigResponse? AzureBlobStorage;
        /// <summary>
        /// Http logs to file system configuration.
        /// </summary>
        public readonly Outputs.FileSystemHttpLogsConfigResponse? FileSystem;

        [OutputConstructor]
        private HttpLogsConfigResponse(
            Outputs.AzureBlobStorageHttpLogsConfigResponse? azureBlobStorage,

            Outputs.FileSystemHttpLogsConfigResponse? fileSystem)
        {
            AzureBlobStorage = azureBlobStorage;
            FileSystem = fileSystem;
        }
    }
}
