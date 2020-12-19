// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20160810.Inputs
{

    /// <summary>
    /// Hyper-V Replica Azure specific input for creating a protection profile.
    /// </summary>
    public sealed class HyperVReplicaAzurePolicyInputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The interval (in hours) at which Hyper-V Replica should create an application consistent snapshot within the VM.
        /// </summary>
        [Input("applicationConsistentSnapshotFrequencyInHours")]
        public Input<int>? ApplicationConsistentSnapshotFrequencyInHours { get; set; }

        /// <summary>
        /// A value indicating whether encryption needs to be enabled for Vms in this cloud.
        /// </summary>
        [Input("encryption")]
        public Input<string>? Encryption { get; set; }

        /// <summary>
        /// The class type.
        /// Expected value is 'HyperVReplicaAzure'.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        /// <summary>
        /// The scheduled start time for the initial replication. If this parameter is Null, the initial replication starts immediately.
        /// </summary>
        [Input("onlineReplicationStartTime")]
        public Input<string>? OnlineReplicationStartTime { get; set; }

        /// <summary>
        /// The duration (in hours) to which point the recovery history needs to be maintained.
        /// </summary>
        [Input("recoveryPointHistoryDuration")]
        public Input<int>? RecoveryPointHistoryDuration { get; set; }

        /// <summary>
        /// The replication interval.
        /// </summary>
        [Input("replicationInterval")]
        public Input<int>? ReplicationInterval { get; set; }

        [Input("storageAccounts")]
        private InputList<string>? _storageAccounts;

        /// <summary>
        /// The list of storage accounts to which the VMs in the primary cloud can replicate to.
        /// </summary>
        public InputList<string> StorageAccounts
        {
            get => _storageAccounts ?? (_storageAccounts = new InputList<string>());
            set => _storageAccounts = value;
        }

        public HyperVReplicaAzurePolicyInputArgs()
        {
        }
    }
}
