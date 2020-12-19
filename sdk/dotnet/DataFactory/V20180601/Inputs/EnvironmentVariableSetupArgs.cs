// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20180601.Inputs
{

    /// <summary>
    /// The custom setup of setting environment variable.
    /// </summary>
    public sealed class EnvironmentVariableSetupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The type of custom setup.
        /// Expected value is 'EnvironmentVariableSetup'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        /// <summary>
        /// The name of the environment variable.
        /// </summary>
        [Input("variableName", required: true)]
        public Input<string> VariableName { get; set; } = null!;

        /// <summary>
        /// The value of the environment variable.
        /// </summary>
        [Input("variableValue", required: true)]
        public Input<string> VariableValue { get; set; } = null!;

        public EnvironmentVariableSetupArgs()
        {
        }
    }
}
