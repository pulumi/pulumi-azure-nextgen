// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DesktopVirtualization.V20200921Preview
{
    /// <summary>
    /// Schema for MSIX Package properties.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:desktopvirtualization/v20200921preview:MSIXPackage")]
    public partial class MSIXPackage : Pulumi.CustomResource
    {
        /// <summary>
        /// User friendly Name to be displayed in the portal. 
        /// </summary>
        [Output("displayName")]
        public Output<string?> DisplayName { get; private set; } = null!;

        /// <summary>
        /// VHD/CIM image path on Network Share.
        /// </summary>
        [Output("imagePath")]
        public Output<string?> ImagePath { get; private set; } = null!;

        /// <summary>
        /// Make this version of the package the active one across the hostpool. 
        /// </summary>
        [Output("isActive")]
        public Output<bool?> IsActive { get; private set; } = null!;

        /// <summary>
        /// Specifies how to register Package in feed.
        /// </summary>
        [Output("isRegularRegistration")]
        public Output<bool?> IsRegularRegistration { get; private set; } = null!;

        /// <summary>
        /// Date Package was last updated, found in the appxmanifest.xml. 
        /// </summary>
        [Output("lastUpdated")]
        public Output<string?> LastUpdated { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// List of package applications. 
        /// </summary>
        [Output("packageApplications")]
        public Output<ImmutableArray<Outputs.MsixPackageApplicationsResponse>> PackageApplications { get; private set; } = null!;

        /// <summary>
        /// List of package dependencies. 
        /// </summary>
        [Output("packageDependencies")]
        public Output<ImmutableArray<Outputs.MsixPackageDependenciesResponse>> PackageDependencies { get; private set; } = null!;

        /// <summary>
        /// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
        /// </summary>
        [Output("packageFamilyName")]
        public Output<string?> PackageFamilyName { get; private set; } = null!;

        /// <summary>
        /// Package Name from appxmanifest.xml. 
        /// </summary>
        [Output("packageName")]
        public Output<string?> PackageName { get; private set; } = null!;

        /// <summary>
        /// Relative Path to the package inside the image. 
        /// </summary>
        [Output("packageRelativePath")]
        public Output<string?> PackageRelativePath { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Package Version found in the appxmanifest.xml. 
        /// </summary>
        [Output("version")]
        public Output<string?> Version { get; private set; } = null!;


        /// <summary>
        /// Create a MSIXPackage resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public MSIXPackage(string name, MSIXPackageArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:desktopvirtualization/v20200921preview:MSIXPackage", name, args ?? new MSIXPackageArgs(), MakeResourceOptions(options, ""))
        {
        }

        private MSIXPackage(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:desktopvirtualization/v20200921preview:MSIXPackage", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201019preview:MSIXPackage"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201102preview:MSIXPackage"},
                    new Pulumi.Alias { Type = "azure-nextgen:desktopvirtualization/v20201110preview:MSIXPackage"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing MSIXPackage resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static MSIXPackage Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new MSIXPackage(name, id, options);
        }
    }

    public sealed class MSIXPackageArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// User friendly Name to be displayed in the portal. 
        /// </summary>
        [Input("displayName")]
        public Input<string>? DisplayName { get; set; }

        /// <summary>
        /// The name of the host pool within the specified resource group
        /// </summary>
        [Input("hostPoolName", required: true)]
        public Input<string> HostPoolName { get; set; } = null!;

        /// <summary>
        /// VHD/CIM image path on Network Share.
        /// </summary>
        [Input("imagePath")]
        public Input<string>? ImagePath { get; set; }

        /// <summary>
        /// Make this version of the package the active one across the hostpool. 
        /// </summary>
        [Input("isActive")]
        public Input<bool>? IsActive { get; set; }

        /// <summary>
        /// Specifies how to register Package in feed.
        /// </summary>
        [Input("isRegularRegistration")]
        public Input<bool>? IsRegularRegistration { get; set; }

        /// <summary>
        /// Date Package was last updated, found in the appxmanifest.xml. 
        /// </summary>
        [Input("lastUpdated")]
        public Input<string>? LastUpdated { get; set; }

        /// <summary>
        /// The version specific package full name of the MSIX package within specified hostpool
        /// </summary>
        [Input("msixPackageFullName", required: true)]
        public Input<string> MsixPackageFullName { get; set; } = null!;

        [Input("packageApplications")]
        private InputList<Inputs.MsixPackageApplicationsArgs>? _packageApplications;

        /// <summary>
        /// List of package applications. 
        /// </summary>
        public InputList<Inputs.MsixPackageApplicationsArgs> PackageApplications
        {
            get => _packageApplications ?? (_packageApplications = new InputList<Inputs.MsixPackageApplicationsArgs>());
            set => _packageApplications = value;
        }

        [Input("packageDependencies")]
        private InputList<Inputs.MsixPackageDependenciesArgs>? _packageDependencies;

        /// <summary>
        /// List of package dependencies. 
        /// </summary>
        public InputList<Inputs.MsixPackageDependenciesArgs> PackageDependencies
        {
            get => _packageDependencies ?? (_packageDependencies = new InputList<Inputs.MsixPackageDependenciesArgs>());
            set => _packageDependencies = value;
        }

        /// <summary>
        /// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
        /// </summary>
        [Input("packageFamilyName")]
        public Input<string>? PackageFamilyName { get; set; }

        /// <summary>
        /// Package Name from appxmanifest.xml. 
        /// </summary>
        [Input("packageName")]
        public Input<string>? PackageName { get; set; }

        /// <summary>
        /// Relative Path to the package inside the image. 
        /// </summary>
        [Input("packageRelativePath")]
        public Input<string>? PackageRelativePath { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Package Version found in the appxmanifest.xml. 
        /// </summary>
        [Input("version")]
        public Input<string>? Version { get; set; }

        public MSIXPackageArgs()
        {
        }
    }
}
