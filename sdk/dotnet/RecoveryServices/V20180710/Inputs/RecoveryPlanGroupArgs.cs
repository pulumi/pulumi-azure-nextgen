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
    /// Recovery plan group details.
    /// </summary>
    public sealed class RecoveryPlanGroupArgs : Pulumi.ResourceArgs
    {
        [Input("endGroupActions")]
        private InputList<Inputs.RecoveryPlanActionArgs>? _endGroupActions;

        /// <summary>
        /// The end group actions.
        /// </summary>
        public InputList<Inputs.RecoveryPlanActionArgs> EndGroupActions
        {
            get => _endGroupActions ?? (_endGroupActions = new InputList<Inputs.RecoveryPlanActionArgs>());
            set => _endGroupActions = value;
        }

        /// <summary>
        /// The group type.
        /// </summary>
        [Input("groupType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.RecoveryServices.V20180710.RecoveryPlanGroupType> GroupType { get; set; } = null!;

        [Input("replicationProtectedItems")]
        private InputList<Inputs.RecoveryPlanProtectedItemArgs>? _replicationProtectedItems;

        /// <summary>
        /// The list of protected items.
        /// </summary>
        public InputList<Inputs.RecoveryPlanProtectedItemArgs> ReplicationProtectedItems
        {
            get => _replicationProtectedItems ?? (_replicationProtectedItems = new InputList<Inputs.RecoveryPlanProtectedItemArgs>());
            set => _replicationProtectedItems = value;
        }

        [Input("startGroupActions")]
        private InputList<Inputs.RecoveryPlanActionArgs>? _startGroupActions;

        /// <summary>
        /// The start group actions.
        /// </summary>
        public InputList<Inputs.RecoveryPlanActionArgs> StartGroupActions
        {
            get => _startGroupActions ?? (_startGroupActions = new InputList<Inputs.RecoveryPlanActionArgs>());
            set => _startGroupActions = value;
        }

        public RecoveryPlanGroupArgs()
        {
        }
    }
}
