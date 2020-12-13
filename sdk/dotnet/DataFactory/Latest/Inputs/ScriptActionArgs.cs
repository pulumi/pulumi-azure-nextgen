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
    /// Custom script action to run on HDI ondemand cluster once it's up.
    /// </summary>
    public sealed class ScriptActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The user provided name of the script action.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The parameters for the script action.
        /// </summary>
        [Input("parameters")]
        public Input<string>? Parameters { get; set; }

        /// <summary>
        /// The node types on which the script action should be executed.
        /// </summary>
        [Input("roles", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataFactory.Latest.HdiNodeTypes> Roles { get; set; } = null!;

        /// <summary>
        /// The URI for the script action.
        /// </summary>
        [Input("uri", required: true)]
        public Input<string> Uri { get; set; } = null!;

        public ScriptActionArgs()
        {
        }
    }
}
