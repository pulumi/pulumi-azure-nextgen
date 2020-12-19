// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Inputs
{

    /// <summary>
    /// The location of azure data lake store dataset.
    /// </summary>
    public sealed class AzureDataLakeStoreLocationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specify the file name of dataset. Type: string (or Expression with resultType string).
        /// </summary>
        [Input("fileName")]
        public Input<object>? FileName { get; set; }

        /// <summary>
        /// Specify the folder path of dataset. Type: string (or Expression with resultType string)
        /// </summary>
        [Input("folderPath")]
        public Input<object>? FolderPath { get; set; }

        /// <summary>
        /// Type of dataset storage location.
        /// Expected value is 'AzureDataLakeStoreLocation'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public AzureDataLakeStoreLocationArgs()
        {
        }
    }
}
