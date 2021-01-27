// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DesktopVirtualization.V20190123Preview
{
    /// <summary>
    /// Represents a HostPool definition.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:desktopvirtualization/v20190123preview:HostPool")]
    public partial class HostPool : Pulumi.CustomResource
    {
        /// <summary>
        /// List of applicationGroup links.
        /// </summary>
        [Output("applicationGroupReferences")]
        public Output<ImmutableArray<string>> ApplicationGroupReferences { get; private set; } = null!;

        /// <summary>
        /// Custom rdp property of HostPool.
        /// </summary>
        [Output("customRdpProperty")]
        public Output<string?> CustomRdpProperty { get; private set; } = null!;

        /// <summary>
        /// Description of HostPool.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Friendly name of HostPool.
        /// </summary>
        [Output("friendlyName")]
        public Output<string?> FriendlyName { get; private set; } = null!;

        /// <summary>
        /// HostPool type for desktop.
        /// </summary>
        [Output("hostPoolType")]
        public Output<string> HostPoolType { get; private set; } = null!;

        /// <summary>
        /// The type of the load balancer.
        /// </summary>
        [Output("loadBalancerType")]
        public Output<string> LoadBalancerType { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The max session limit of HostPool.
        /// </summary>
        [Output("maxSessionLimit")]
        public Output<int?> MaxSessionLimit { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// PersonalDesktopAssignment type for HostPool.
        /// </summary>
        [Output("personalDesktopAssignmentType")]
        public Output<string?> PersonalDesktopAssignmentType { get; private set; } = null!;

        /// <summary>
        /// The type of preferred application group type, default to Desktop Application Group
        /// </summary>
        [Output("preferredAppGroupType")]
        public Output<string> PreferredAppGroupType { get; private set; } = null!;

        /// <summary>
        /// The registration info of HostPool.
        /// </summary>
        [Output("registrationInfo")]
        public Output<Outputs.RegistrationInfoResponse?> RegistrationInfo { get; private set; } = null!;

        /// <summary>
        /// The ring number of HostPool.
        /// </summary>
        [Output("ring")]
        public Output<int?> Ring { get; private set; } = null!;

        /// <summary>
        /// Path to keyvault containing ssoContext secret.
        /// </summary>
        [Output("ssoContext")]
        public Output<string?> SsoContext { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Is validation environment.
        /// </summary>
        [Output("validationEnvironment")]
        public Output<bool?> ValidationEnvironment { get; private set; } = null!;

        /// <summary>
        /// VM template for sessionhosts configuration within hostpool.
        /// </summary>
        [Output("vmTemplate")]
        public Output<string?> VmTemplate { get; private set; } = null!;


        /// <summary>
        /// Create a HostPool resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public HostPool(string name, HostPoolArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:desktopvirtualization/v20190123preview:HostPool", name, args ?? new HostPoolArgs(), MakeResourceOptions(options, ""))
        {
        }

        private HostPool(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:desktopvirtualization/v20190123preview:HostPool", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20190924preview:HostPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20191210preview:HostPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20200921preview:HostPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201019preview:HostPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201102preview:HostPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201110preview:HostPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20210114preview:HostPool"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing HostPool resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static HostPool Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new HostPool(name, id, options);
        }
    }

    public sealed class HostPoolArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Custom rdp property of HostPool.
        /// </summary>
        [Input("customRdpProperty")]
        public Input<string>? CustomRdpProperty { get; set; }

        /// <summary>
        /// Description of HostPool.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Friendly name of HostPool.
        /// </summary>
        [Input("friendlyName")]
        public Input<string>? FriendlyName { get; set; }

        /// <summary>
        /// The name of the host pool within the specified resource group
        /// </summary>
        [Input("hostPoolName", required: true)]
        public Input<string> HostPoolName { get; set; } = null!;

        /// <summary>
        /// HostPool type for desktop.
        /// </summary>
        [Input("hostPoolType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20190123Preview.HostPoolType> HostPoolType { get; set; } = null!;

        /// <summary>
        /// The type of the load balancer.
        /// </summary>
        [Input("loadBalancerType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20190123Preview.LoadBalancerType> LoadBalancerType { get; set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The max session limit of HostPool.
        /// </summary>
        [Input("maxSessionLimit")]
        public Input<int>? MaxSessionLimit { get; set; }

        /// <summary>
        /// PersonalDesktopAssignment type for HostPool.
        /// </summary>
        [Input("personalDesktopAssignmentType")]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20190123Preview.PersonalDesktopAssignmentType>? PersonalDesktopAssignmentType { get; set; }

        /// <summary>
        /// The type of preferred application group type, default to Desktop Application Group
        /// </summary>
        [Input("preferredAppGroupType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DesktopVirtualization.V20190123Preview.PreferredAppGroupType> PreferredAppGroupType { get; set; } = null!;

        /// <summary>
        /// The registration info of HostPool.
        /// </summary>
        [Input("registrationInfo")]
        public Input<Inputs.RegistrationInfoArgs>? RegistrationInfo { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The ring number of HostPool.
        /// </summary>
        [Input("ring")]
        public Input<int>? Ring { get; set; }

        /// <summary>
        /// Path to keyvault containing ssoContext secret.
        /// </summary>
        [Input("ssoContext")]
        public Input<string>? SsoContext { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Is validation environment.
        /// </summary>
        [Input("validationEnvironment")]
        public Input<bool>? ValidationEnvironment { get; set; }

        /// <summary>
        /// VM template for sessionhosts configuration within hostpool.
        /// </summary>
        [Input("vmTemplate")]
        public Input<string>? VmTemplate { get; set; }

        public HostPoolArgs()
        {
        }
    }
}
