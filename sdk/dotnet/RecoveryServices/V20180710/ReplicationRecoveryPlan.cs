// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180710
{
    /// <summary>
    /// Recovery plan details.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:recoveryservices/v20180710:ReplicationRecoveryPlan")]
    public partial class ReplicationRecoveryPlan : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource Location
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Resource Name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The custom details.
        /// </summary>
        [Output("properties")]
        public Output<Outputs.RecoveryPlanPropertiesResponse> Properties { get; private set; } = null!;

        /// <summary>
        /// Resource Type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ReplicationRecoveryPlan resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ReplicationRecoveryPlan(string name, ReplicationRecoveryPlanArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:recoveryservices/v20180710:ReplicationRecoveryPlan", name, args ?? new ReplicationRecoveryPlanArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ReplicationRecoveryPlan(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:recoveryservices/v20180710:ReplicationRecoveryPlan", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:recoveryservices/latest:ReplicationRecoveryPlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:recoveryservices/v20160810:ReplicationRecoveryPlan"},
                    new Pulumi.Alias { Type = "azure-nextgen:recoveryservices/v20180110:ReplicationRecoveryPlan"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ReplicationRecoveryPlan resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ReplicationRecoveryPlan Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ReplicationRecoveryPlan(name, id, options);
        }
    }

    public sealed class ReplicationRecoveryPlanArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Recovery plan creation properties.
        /// </summary>
        [Input("properties", required: true)]
        public Input<Inputs.CreateRecoveryPlanInputPropertiesArgs> Properties { get; set; } = null!;

        /// <summary>
        /// Recovery plan name.
        /// </summary>
        [Input("recoveryPlanName", required: true)]
        public Input<string> RecoveryPlanName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group where the recovery services vault is present.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the recovery services vault.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        public ReplicationRecoveryPlanArgs()
        {
        }
    }
}
