// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.V20171001.Inputs
{

    /// <summary>
    /// The SKU of the storage account.
    /// </summary>
    public sealed class SkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets the sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType.
        /// </summary>
        [Input("name", required: true)]
        public Input<Pulumi.AzureNextGen.Storage.V20171001.SkuName> Name { get; set; } = null!;

        [Input("restrictions")]
        private InputList<Inputs.RestrictionArgs>? _restrictions;

        /// <summary>
        /// The restrictions because of which SKU cannot be used. This is empty if there are no restrictions.
        /// </summary>
        public InputList<Inputs.RestrictionArgs> Restrictions
        {
            get => _restrictions ?? (_restrictions = new InputList<Inputs.RestrictionArgs>());
            set => _restrictions = value;
        }

        public SkuArgs()
        {
        }
    }
}
