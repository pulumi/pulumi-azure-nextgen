// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EnterpriseKnowledgeGraph.V20181203.Inputs
{

    /// <summary>
    /// The SKU of the EnterpriseKnowledgeGraph service account.
    /// </summary>
    public sealed class SkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The sku name
        /// </summary>
        [Input("name", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.EnterpriseKnowledgeGraph.V20181203.SkuName> Name { get; set; } = null!;

        public SkuArgs()
        {
        }
    }
}
