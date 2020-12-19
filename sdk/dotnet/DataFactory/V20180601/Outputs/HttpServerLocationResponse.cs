// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Outputs
{

    [OutputType]
    public sealed class HttpServerLocationResponse
    {
        /// <summary>
        /// Specify the file name of dataset. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? FileName;
        /// <summary>
        /// Specify the folder path of dataset. Type: string (or Expression with resultType string)
        /// </summary>
        public readonly object? FolderPath;
        /// <summary>
        /// Specify the relativeUrl of http server. Type: string (or Expression with resultType string)
        /// </summary>
        public readonly object? RelativeUrl;
        /// <summary>
        /// Type of dataset storage location.
        /// Expected value is 'HttpServerLocation'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private HttpServerLocationResponse(
            object? fileName,

            object? folderPath,

            object? relativeUrl,

            string type)
        {
            FileName = fileName;
            FolderPath = folderPath;
            RelativeUrl = relativeUrl;
            Type = type;
        }
    }
}
