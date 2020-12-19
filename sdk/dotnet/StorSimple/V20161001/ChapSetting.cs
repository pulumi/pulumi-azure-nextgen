// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20161001
{
    /// <summary>
    /// Challenge-Handshake Authentication Protocol (CHAP) setting
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:storsimple/v20161001:ChapSetting")]
    public partial class ChapSetting : Pulumi.CustomResource
    {
        /// <summary>
        /// The name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The chap password.
        /// </summary>
        [Output("password")]
        public Output<Outputs.AsymmetricEncryptedSecretResponse> Password { get; private set; } = null!;

        /// <summary>
        /// The type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ChapSetting resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ChapSetting(string name, ChapSettingArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:storsimple/v20161001:ChapSetting", name, args ?? new ChapSettingArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ChapSetting(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:storsimple/v20161001:ChapSetting", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:storsimple/latest:ChapSetting"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ChapSetting resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ChapSetting Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ChapSetting(name, id, options);
        }
    }

    public sealed class ChapSettingArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The chap user name.
        /// </summary>
        [Input("chapUserName", required: true)]
        public Input<string> ChapUserName { get; set; } = null!;

        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        /// <summary>
        /// The manager name
        /// </summary>
        [Input("managerName", required: true)]
        public Input<string> ManagerName { get; set; } = null!;

        /// <summary>
        /// The chap password.
        /// </summary>
        [Input("password", required: true)]
        public Input<Inputs.AsymmetricEncryptedSecretArgs> Password { get; set; } = null!;

        /// <summary>
        /// The resource group name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ChapSettingArgs()
        {
        }
    }
}
