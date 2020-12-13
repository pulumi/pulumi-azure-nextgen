// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190801.Inputs
{

    /// <summary>
    /// ExpressRouteLink Mac Security Configuration.
    /// </summary>
    public sealed class ExpressRouteLinkMacSecConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Keyvault Secret Identifier URL containing Mac security CAK key.
        /// </summary>
        [Input("cakSecretIdentifier")]
        public Input<string>? CakSecretIdentifier { get; set; }

        /// <summary>
        /// Mac security cipher.
        /// </summary>
        [Input("cipher")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190801.ExpressRouteLinkMacSecCipher>? Cipher { get; set; }

        /// <summary>
        /// Keyvault Secret Identifier URL containing Mac security CKN key.
        /// </summary>
        [Input("cknSecretIdentifier")]
        public Input<string>? CknSecretIdentifier { get; set; }

        public ExpressRouteLinkMacSecConfigArgs()
        {
        }
    }
}
