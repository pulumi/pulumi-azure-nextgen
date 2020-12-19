// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.Latest
{
    /// <summary>
    /// A custom image.
    /// Latest API Version: 2018-09-15.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:devtestlab/latest:CustomImage")]
    public partial class CustomImage : Pulumi.CustomResource
    {
        /// <summary>
        /// The author of the custom image.
        /// </summary>
        [Output("author")]
        public Output<string?> Author { get; private set; } = null!;

        /// <summary>
        /// The creation date of the custom image.
        /// </summary>
        [Output("creationDate")]
        public Output<string> CreationDate { get; private set; } = null!;

        /// <summary>
        /// Storage information about the plan related to this custom image
        /// </summary>
        [Output("customImagePlan")]
        public Output<Outputs.CustomImagePropertiesFromPlanResponse?> CustomImagePlan { get; private set; } = null!;

        /// <summary>
        /// Storage information about the data disks present in the custom image
        /// </summary>
        [Output("dataDiskStorageInfo")]
        public Output<ImmutableArray<Outputs.DataDiskStorageTypeInfoResponse>> DataDiskStorageInfo { get; private set; } = null!;

        /// <summary>
        /// The description of the custom image.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
        /// </summary>
        [Output("isPlanAuthorized")]
        public Output<bool?> IsPlanAuthorized { get; private set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The Managed Image Id backing the custom image.
        /// </summary>
        [Output("managedImageId")]
        public Output<string?> ManagedImageId { get; private set; } = null!;

        /// <summary>
        /// The Managed Snapshot Id backing the custom image.
        /// </summary>
        [Output("managedSnapshotId")]
        public Output<string?> ManagedSnapshotId { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Output("uniqueIdentifier")]
        public Output<string> UniqueIdentifier { get; private set; } = null!;

        /// <summary>
        /// The VHD from which the image is to be created.
        /// </summary>
        [Output("vhd")]
        public Output<Outputs.CustomImagePropertiesCustomResponse?> Vhd { get; private set; } = null!;

        /// <summary>
        /// The virtual machine from which the image is to be created.
        /// </summary>
        [Output("vm")]
        public Output<Outputs.CustomImagePropertiesFromVmResponse?> Vm { get; private set; } = null!;


        /// <summary>
        /// Create a CustomImage resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public CustomImage(string name, CustomImageArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/latest:CustomImage", name, args ?? new CustomImageArgs(), MakeResourceOptions(options, ""))
        {
        }

        private CustomImage(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/latest:CustomImage", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20150521preview:CustomImage"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20160515:CustomImage"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20180915:CustomImage"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing CustomImage resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static CustomImage Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new CustomImage(name, id, options);
        }
    }

    public sealed class CustomImageArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The author of the custom image.
        /// </summary>
        [Input("author")]
        public Input<string>? Author { get; set; }

        /// <summary>
        /// Storage information about the plan related to this custom image
        /// </summary>
        [Input("customImagePlan")]
        public Input<Inputs.CustomImagePropertiesFromPlanArgs>? CustomImagePlan { get; set; }

        [Input("dataDiskStorageInfo")]
        private InputList<Inputs.DataDiskStorageTypeInfoArgs>? _dataDiskStorageInfo;

        /// <summary>
        /// Storage information about the data disks present in the custom image
        /// </summary>
        public InputList<Inputs.DataDiskStorageTypeInfoArgs> DataDiskStorageInfo
        {
            get => _dataDiskStorageInfo ?? (_dataDiskStorageInfo = new InputList<Inputs.DataDiskStorageTypeInfoArgs>());
            set => _dataDiskStorageInfo = value;
        }

        /// <summary>
        /// The description of the custom image.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment
        /// </summary>
        [Input("isPlanAuthorized")]
        public Input<bool>? IsPlanAuthorized { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public Input<string> LabName { get; set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The Managed Image Id backing the custom image.
        /// </summary>
        [Input("managedImageId")]
        public Input<string>? ManagedImageId { get; set; }

        /// <summary>
        /// The Managed Snapshot Id backing the custom image.
        /// </summary>
        [Input("managedSnapshotId")]
        public Input<string>? ManagedSnapshotId { get; set; }

        /// <summary>
        /// The name of the custom image.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The VHD from which the image is to be created.
        /// </summary>
        [Input("vhd")]
        public Input<Inputs.CustomImagePropertiesCustomArgs>? Vhd { get; set; }

        /// <summary>
        /// The virtual machine from which the image is to be created.
        /// </summary>
        [Input("vm")]
        public Input<Inputs.CustomImagePropertiesFromVmArgs>? Vm { get; set; }

        public CustomImageArgs()
        {
        }
    }
}
