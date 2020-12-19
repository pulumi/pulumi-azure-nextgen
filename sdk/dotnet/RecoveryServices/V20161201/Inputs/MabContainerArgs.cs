// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20161201.Inputs
{

    /// <summary>
    /// Container with items backed up using MAB backup engine.
    /// </summary>
    public sealed class MabContainerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Agent version of this container.
        /// </summary>
        [Input("agentVersion")]
        public Input<string>? AgentVersion { get; set; }

        /// <summary>
        /// Type of backup management for the container.
        /// </summary>
        [Input("backupManagementType")]
        public InputUnion<string, Pulumi.AzureNextGen.RecoveryServices.V20161201.BackupManagementType>? BackupManagementType { get; set; }

        /// <summary>
        /// Can the container be registered one more time.
        /// </summary>
        [Input("canReRegister")]
        public Input<bool>? CanReRegister { get; set; }

        /// <summary>
        /// Health state of mab container.
        /// </summary>
        [Input("containerHealthState")]
        public Input<string>? ContainerHealthState { get; set; }

        /// <summary>
        /// ContainerID represents the container.
        /// </summary>
        [Input("containerId")]
        public Input<int>? ContainerId { get; set; }

        /// <summary>
        /// Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
        /// Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
        /// Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
        /// Backup is VMAppContainer
        /// Expected value is 'Windows'.
        /// </summary>
        [Input("containerType")]
        public Input<string>? ContainerType { get; set; }

        /// <summary>
        /// Additional information for this container
        /// </summary>
        [Input("extendedInfo")]
        public Input<Inputs.MabContainerExtendedInfoArgs>? ExtendedInfo { get; set; }

        /// <summary>
        /// Friendly name of the container.
        /// </summary>
        [Input("friendlyName")]
        public Input<string>? FriendlyName { get; set; }

        /// <summary>
        /// Status of health of the container.
        /// </summary>
        [Input("healthStatus")]
        public Input<string>? HealthStatus { get; set; }

        [Input("mabContainerHealthDetails")]
        private InputList<Inputs.MABContainerHealthDetailsArgs>? _mabContainerHealthDetails;

        /// <summary>
        /// Health details on this mab container.
        /// </summary>
        public InputList<Inputs.MABContainerHealthDetailsArgs> MabContainerHealthDetails
        {
            get => _mabContainerHealthDetails ?? (_mabContainerHealthDetails = new InputList<Inputs.MABContainerHealthDetailsArgs>());
            set => _mabContainerHealthDetails = value;
        }

        /// <summary>
        /// Number of items backed up in this container.
        /// </summary>
        [Input("protectedItemCount")]
        public Input<int>? ProtectedItemCount { get; set; }

        /// <summary>
        /// Status of registration of the container with the Recovery Services Vault.
        /// </summary>
        [Input("registrationStatus")]
        public Input<string>? RegistrationStatus { get; set; }

        public MabContainerArgs()
        {
        }
    }
}
