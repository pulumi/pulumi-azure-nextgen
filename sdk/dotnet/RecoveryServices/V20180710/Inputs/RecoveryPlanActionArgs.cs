// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180710.Inputs
{

    /// <summary>
    /// Recovery plan action details.
    /// </summary>
    public sealed class RecoveryPlanActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The action name.
        /// </summary>
        [Input("actionName", required: true)]
        public Input<string> ActionName { get; set; } = null!;

        [Input("failoverDirections", required: true)]
        private InputList<Union<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.PossibleOperationsDirections>>? _failoverDirections;

        /// <summary>
        /// The list of failover directions.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.PossibleOperationsDirections>> FailoverDirections
        {
            get => _failoverDirections ?? (_failoverDirections = new InputList<Union<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.PossibleOperationsDirections>>());
            set => _failoverDirections = value;
        }

        [Input("failoverTypes", required: true)]
        private InputList<Union<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.ReplicationProtectedItemOperation>>? _failoverTypes;

        /// <summary>
        /// The list of failover types.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.ReplicationProtectedItemOperation>> FailoverTypes
        {
            get => _failoverTypes ?? (_failoverTypes = new InputList<Union<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.ReplicationProtectedItemOperation>>());
            set => _failoverTypes = value;
        }

        public RecoveryPlanActionArgs()
        {
        }
    }
}
