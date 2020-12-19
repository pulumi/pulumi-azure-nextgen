// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DeploymentManager.V20191101Preview.Inputs
{

    /// <summary>
    /// Defines the properties of a Wait step.
    /// </summary>
    public sealed class WaitStepPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Wait attributes
        /// </summary>
        [Input("attributes", required: true)]
        public Input<Inputs.WaitStepAttributesArgs> Attributes { get; set; } = null!;

        /// <summary>
        /// The type of step.
        /// Expected value is 'Wait'.
        /// </summary>
        [Input("stepType", required: true)]
        public Input<string> StepType { get; set; } = null!;

        public WaitStepPropertiesArgs()
        {
        }
    }
}
