// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20171201.Inputs
{

    /// <summary>
    /// Describes the parameters of a ScaleSet managed disk.
    /// </summary>
    public sealed class VirtualMachineScaleSetManagedDiskParametersArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
        /// </summary>
        [Input("storageAccountType")]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20171201.StorageAccountTypes>? StorageAccountType { get; set; }

        public VirtualMachineScaleSetManagedDiskParametersArgs()
        {
        }
    }
}
