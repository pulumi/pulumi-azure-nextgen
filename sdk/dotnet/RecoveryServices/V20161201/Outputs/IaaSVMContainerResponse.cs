// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20161201.Outputs
{

    [OutputType]
    public sealed class IaaSVMContainerResponse
    {
        /// <summary>
        /// Type of backup management for the container.
        /// </summary>
        public readonly string? BackupManagementType;
        /// <summary>
        /// Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.
        /// Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) is
        /// Windows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workload
        /// Backup is VMAppContainer
        /// Expected value is 'IaaSVMContainer'.
        /// </summary>
        public readonly string? ContainerType;
        /// <summary>
        /// Friendly name of the container.
        /// </summary>
        public readonly string? FriendlyName;
        /// <summary>
        /// Status of health of the container.
        /// </summary>
        public readonly string? HealthStatus;
        /// <summary>
        /// Status of registration of the container with the Recovery Services Vault.
        /// </summary>
        public readonly string? RegistrationStatus;
        /// <summary>
        /// Resource group name of Recovery Services Vault.
        /// </summary>
        public readonly string? ResourceGroup;
        /// <summary>
        /// Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
        /// </summary>
        public readonly string? VirtualMachineId;
        /// <summary>
        /// Specifies whether the container represents a Classic or an Azure Resource Manager VM.
        /// </summary>
        public readonly string? VirtualMachineVersion;

        [OutputConstructor]
        private IaaSVMContainerResponse(
            string? backupManagementType,

            string? containerType,

            string? friendlyName,

            string? healthStatus,

            string? registrationStatus,

            string? resourceGroup,

            string? virtualMachineId,

            string? virtualMachineVersion)
        {
            BackupManagementType = backupManagementType;
            ContainerType = containerType;
            FriendlyName = friendlyName;
            HealthStatus = healthStatus;
            RegistrationStatus = registrationStatus;
            ResourceGroup = resourceGroup;
            VirtualMachineId = virtualMachineId;
            VirtualMachineVersion = virtualMachineVersion;
        }
    }
}
