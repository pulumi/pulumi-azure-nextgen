// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.V20200801Preview.Inputs
{

    /// <summary>
    /// Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. 
    /// </summary>
    public sealed class ManagementPolicyFilterArgs : Pulumi.ResourceArgs
    {
        [Input("blobIndexMatch")]
        private InputList<Inputs.TagFilterArgs>? _blobIndexMatch;

        /// <summary>
        /// An array of blob index tag based filters, there can be at most 10 tag filters
        /// </summary>
        public InputList<Inputs.TagFilterArgs> BlobIndexMatch
        {
            get => _blobIndexMatch ?? (_blobIndexMatch = new InputList<Inputs.TagFilterArgs>());
            set => _blobIndexMatch = value;
        }

        [Input("blobTypes", required: true)]
        private InputList<string>? _blobTypes;

        /// <summary>
        /// An array of predefined enum values. Currently blockBlob supports all tiering and delete actions. Only delete actions are supported for appendBlob.
        /// </summary>
        public InputList<string> BlobTypes
        {
            get => _blobTypes ?? (_blobTypes = new InputList<string>());
            set => _blobTypes = value;
        }

        [Input("prefixMatch")]
        private InputList<string>? _prefixMatch;

        /// <summary>
        /// An array of strings for prefixes to be match.
        /// </summary>
        public InputList<string> PrefixMatch
        {
            get => _prefixMatch ?? (_prefixMatch = new InputList<string>());
            set => _prefixMatch = value;
        }

        public ManagementPolicyFilterArgs()
        {
        }
    }
}
