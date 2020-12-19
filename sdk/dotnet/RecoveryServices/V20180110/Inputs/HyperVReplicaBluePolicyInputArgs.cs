// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180110.Inputs
{

    /// <summary>
    /// HyperV Replica Blue policy input.
    /// </summary>
    public sealed class HyperVReplicaBluePolicyInputArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A value indicating the authentication type.
        /// </summary>
        [Input("allowedAuthenticationType")]
        public Input<int>? AllowedAuthenticationType { get; set; }

        /// <summary>
        /// A value indicating the application consistent frequency.
        /// </summary>
        [Input("applicationConsistentSnapshotFrequencyInHours")]
        public Input<int>? ApplicationConsistentSnapshotFrequencyInHours { get; set; }

        /// <summary>
        /// A value indicating whether compression has to be enabled.
        /// </summary>
        [Input("compression")]
        public Input<string>? Compression { get; set; }

        /// <summary>
        /// A value indicating whether IR is online.
        /// </summary>
        [Input("initialReplicationMethod")]
        public Input<string>? InitialReplicationMethod { get; set; }

        /// <summary>
        /// The class type.
        /// Expected value is 'HyperVReplica2012R2'.
        /// </summary>
        [Input("instanceType")]
        public Input<string>? InstanceType { get; set; }

        /// <summary>
        /// A value indicating the offline IR export path.
        /// </summary>
        [Input("offlineReplicationExportPath")]
        public Input<string>? OfflineReplicationExportPath { get; set; }

        /// <summary>
        /// A value indicating the offline IR import path.
        /// </summary>
        [Input("offlineReplicationImportPath")]
        public Input<string>? OfflineReplicationImportPath { get; set; }

        /// <summary>
        /// A value indicating the online IR start time.
        /// </summary>
        [Input("onlineReplicationStartTime")]
        public Input<string>? OnlineReplicationStartTime { get; set; }

        /// <summary>
        /// A value indicating the number of recovery points.
        /// </summary>
        [Input("recoveryPoints")]
        public Input<int>? RecoveryPoints { get; set; }

        /// <summary>
        /// A value indicating whether the VM has to be auto deleted.
        /// </summary>
        [Input("replicaDeletion")]
        public Input<string>? ReplicaDeletion { get; set; }

        /// <summary>
        /// A value indicating the replication interval.
        /// </summary>
        [Input("replicationFrequencyInSeconds")]
        public Input<int>? ReplicationFrequencyInSeconds { get; set; }

        /// <summary>
        /// A value indicating the recovery HTTPS port.
        /// </summary>
        [Input("replicationPort")]
        public Input<int>? ReplicationPort { get; set; }

        public HyperVReplicaBluePolicyInputArgs()
        {
        }
    }
}
