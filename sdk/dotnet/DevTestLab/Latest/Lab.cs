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
    /// A lab.
    /// Latest API Version: 2018-09-15.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:devtestlab/latest:Lab")]
    public partial class Lab : Pulumi.CustomResource
    {
        /// <summary>
        /// The properties of any lab announcement associated with this lab
        /// </summary>
        [Output("announcement")]
        public Output<Outputs.LabAnnouncementPropertiesResponse?> Announcement { get; private set; } = null!;

        /// <summary>
        /// The lab's artifact storage account.
        /// </summary>
        [Output("artifactsStorageAccount")]
        public Output<string> ArtifactsStorageAccount { get; private set; } = null!;

        /// <summary>
        /// The creation date of the lab.
        /// </summary>
        [Output("createdDate")]
        public Output<string> CreatedDate { get; private set; } = null!;

        /// <summary>
        /// The lab's default premium storage account.
        /// </summary>
        [Output("defaultPremiumStorageAccount")]
        public Output<string> DefaultPremiumStorageAccount { get; private set; } = null!;

        /// <summary>
        /// The lab's default storage account.
        /// </summary>
        [Output("defaultStorageAccount")]
        public Output<string> DefaultStorageAccount { get; private set; } = null!;

        /// <summary>
        /// The access rights to be granted to the user when provisioning an environment
        /// </summary>
        [Output("environmentPermission")]
        public Output<string?> EnvironmentPermission { get; private set; } = null!;

        /// <summary>
        /// Extended properties of the lab used for experimental features
        /// </summary>
        [Output("extendedProperties")]
        public Output<ImmutableDictionary<string, string>?> ExtendedProperties { get; private set; } = null!;

        /// <summary>
        /// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
        /// </summary>
        [Output("labStorageType")]
        public Output<string?> LabStorageType { get; private set; } = null!;

        /// <summary>
        /// The load balancer used to for lab VMs that use shared IP address.
        /// </summary>
        [Output("loadBalancerId")]
        public Output<string> LoadBalancerId { get; private set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
        /// </summary>
        [Output("mandatoryArtifactsResourceIdsLinux")]
        public Output<ImmutableArray<string>> MandatoryArtifactsResourceIdsLinux { get; private set; } = null!;

        /// <summary>
        /// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
        /// </summary>
        [Output("mandatoryArtifactsResourceIdsWindows")]
        public Output<ImmutableArray<string>> MandatoryArtifactsResourceIdsWindows { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The Network Security Group attached to the lab VMs Network interfaces to restrict open ports.
        /// </summary>
        [Output("networkSecurityGroupId")]
        public Output<string> NetworkSecurityGroupId { get; private set; } = null!;

        /// <summary>
        /// The lab's premium data disk storage account.
        /// </summary>
        [Output("premiumDataDiskStorageAccount")]
        public Output<string> PremiumDataDiskStorageAccount { get; private set; } = null!;

        /// <summary>
        /// The setting to enable usage of premium data disks.
        /// When its value is 'Enabled', creation of standard or premium data disks is allowed.
        /// When its value is 'Disabled', only creation of standard data disks is allowed.
        /// </summary>
        [Output("premiumDataDisks")]
        public Output<string?> PremiumDataDisks { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The public IP address for the lab's load balancer.
        /// </summary>
        [Output("publicIpId")]
        public Output<string> PublicIpId { get; private set; } = null!;

        /// <summary>
        /// The properties of any lab support message associated with this lab
        /// </summary>
        [Output("support")]
        public Output<Outputs.LabSupportPropertiesResponse?> Support { get; private set; } = null!;

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
        /// The lab's Key vault.
        /// </summary>
        [Output("vaultName")]
        public Output<string> VaultName { get; private set; } = null!;

        /// <summary>
        /// The resource group in which all new lab virtual machines will be created. To let DevTest Labs manage resource group creation, set this value to null.
        /// </summary>
        [Output("vmCreationResourceGroup")]
        public Output<string> VmCreationResourceGroup { get; private set; } = null!;


        /// <summary>
        /// Create a Lab resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Lab(string name, LabArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/latest:Lab", name, args ?? new LabArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Lab(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/latest:Lab", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20150521preview:Lab"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20160515:Lab"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20180915:Lab"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Lab resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Lab Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Lab(name, id, options);
        }
    }

    public sealed class LabArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The properties of any lab announcement associated with this lab
        /// </summary>
        [Input("announcement")]
        public Input<Inputs.LabAnnouncementPropertiesArgs>? Announcement { get; set; }

        /// <summary>
        /// The access rights to be granted to the user when provisioning an environment
        /// </summary>
        [Input("environmentPermission")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.Latest.EnvironmentPermission>? EnvironmentPermission { get; set; }

        [Input("extendedProperties")]
        private InputMap<string>? _extendedProperties;

        /// <summary>
        /// Extended properties of the lab used for experimental features
        /// </summary>
        public InputMap<string> ExtendedProperties
        {
            get => _extendedProperties ?? (_extendedProperties = new InputMap<string>());
            set => _extendedProperties = value;
        }

        /// <summary>
        /// Type of storage used by the lab. It can be either Premium or Standard. Default is Premium.
        /// </summary>
        [Input("labStorageType")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.Latest.StorageType>? LabStorageType { get; set; }

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        [Input("mandatoryArtifactsResourceIdsLinux")]
        private InputList<string>? _mandatoryArtifactsResourceIdsLinux;

        /// <summary>
        /// The ordered list of artifact resource IDs that should be applied on all Linux VM creations by default, prior to the artifacts specified by the user.
        /// </summary>
        public InputList<string> MandatoryArtifactsResourceIdsLinux
        {
            get => _mandatoryArtifactsResourceIdsLinux ?? (_mandatoryArtifactsResourceIdsLinux = new InputList<string>());
            set => _mandatoryArtifactsResourceIdsLinux = value;
        }

        [Input("mandatoryArtifactsResourceIdsWindows")]
        private InputList<string>? _mandatoryArtifactsResourceIdsWindows;

        /// <summary>
        /// The ordered list of artifact resource IDs that should be applied on all Windows VM creations by default, prior to the artifacts specified by the user.
        /// </summary>
        public InputList<string> MandatoryArtifactsResourceIdsWindows
        {
            get => _mandatoryArtifactsResourceIdsWindows ?? (_mandatoryArtifactsResourceIdsWindows = new InputList<string>());
            set => _mandatoryArtifactsResourceIdsWindows = value;
        }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The setting to enable usage of premium data disks.
        /// When its value is 'Enabled', creation of standard or premium data disks is allowed.
        /// When its value is 'Disabled', only creation of standard data disks is allowed.
        /// </summary>
        [Input("premiumDataDisks")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.Latest.PremiumDataDisk>? PremiumDataDisks { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The properties of any lab support message associated with this lab
        /// </summary>
        [Input("support")]
        public Input<Inputs.LabSupportPropertiesArgs>? Support { get; set; }

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

        public LabArgs()
        {
        }
    }
}
