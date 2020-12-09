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
    /// Setting for SMB protocol
    /// </summary>
    public sealed class SmbSettingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Multichannel setting. Applies to Premium FileStorage only.
        /// </summary>
        [Input("multichannel")]
        public Input<Inputs.MultichannelArgs>? Multichannel { get; set; }

        public SmbSettingArgs()
        {
        }
    }
}