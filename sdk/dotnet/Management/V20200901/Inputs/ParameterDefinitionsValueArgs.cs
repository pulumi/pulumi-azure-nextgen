// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Management.V20200901.Inputs
{

    /// <summary>
    /// The definition of a parameter that can be provided to the policy.
    /// </summary>
    public sealed class ParameterDefinitionsValueArgs : Pulumi.ResourceArgs
    {
        [Input("allowedValues")]
        private InputList<object>? _allowedValues;

        /// <summary>
        /// The allowed values for the parameter.
        /// </summary>
        public InputList<object> AllowedValues
        {
            get => _allowedValues ?? (_allowedValues = new InputList<object>());
            set => _allowedValues = value;
        }

        /// <summary>
        /// The default value for the parameter if no value is provided.
        /// </summary>
        [Input("defaultValue")]
        public Input<object>? DefaultValue { get; set; }

        /// <summary>
        /// General metadata for the parameter.
        /// </summary>
        [Input("metadata")]
        public Input<Inputs.ParameterDefinitionsValueMetadataArgs>? Metadata { get; set; }

        /// <summary>
        /// The data type of the parameter.
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.Management.V20200901.ParameterType>? Type { get; set; }

        public ParameterDefinitionsValueArgs()
        {
        }
    }
}