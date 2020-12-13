// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest.Inputs
{

    /// <summary>
    /// Define match variables.
    /// </summary>
    public sealed class MatchVariableArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The selector of match variable.
        /// </summary>
        [Input("selector")]
        public Input<string>? Selector { get; set; }

        /// <summary>
        /// Match Variable.
        /// </summary>
        [Input("variableName", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Network.Latest.WebApplicationFirewallMatchVariable> VariableName { get; set; } = null!;

        public MatchVariableArgs()
        {
        }
    }
}
