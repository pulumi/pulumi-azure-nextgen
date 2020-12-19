// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataLakeAnalytics.Latest
{
    /// <summary>
    /// Data Lake Analytics compute policy information.
    /// Latest API Version: 2016-11-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:datalakeanalytics/latest:ComputePolicy")]
    public partial class ComputePolicy : Pulumi.CustomResource
    {
        /// <summary>
        /// The maximum degree of parallelism per job this user can use to submit jobs.
        /// </summary>
        [Output("maxDegreeOfParallelismPerJob")]
        public Output<int> MaxDegreeOfParallelismPerJob { get; private set; } = null!;

        /// <summary>
        /// The minimum priority per job this user can use to submit jobs.
        /// </summary>
        [Output("minPriorityPerJob")]
        public Output<int> MinPriorityPerJob { get; private set; } = null!;

        /// <summary>
        /// The resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The AAD object identifier for the entity to create a policy for.
        /// </summary>
        [Output("objectId")]
        public Output<string> ObjectId { get; private set; } = null!;

        /// <summary>
        /// The type of AAD object the object identifier refers to.
        /// </summary>
        [Output("objectType")]
        public Output<string> ObjectType { get; private set; } = null!;

        /// <summary>
        /// The resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ComputePolicy resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ComputePolicy(string name, ComputePolicyArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:datalakeanalytics/latest:ComputePolicy", name, args ?? new ComputePolicyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ComputePolicy(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:datalakeanalytics/latest:ComputePolicy", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:datalakeanalytics/v20161101:ComputePolicy"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ComputePolicy resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ComputePolicy Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ComputePolicy(name, id, options);
        }
    }

    public sealed class ComputePolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the Data Lake Analytics account.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the compute policy to create or update.
        /// </summary>
        [Input("computePolicyName", required: true)]
        public Input<string> ComputePolicyName { get; set; } = null!;

        /// <summary>
        /// The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
        /// </summary>
        [Input("maxDegreeOfParallelismPerJob")]
        public Input<int>? MaxDegreeOfParallelismPerJob { get; set; }

        /// <summary>
        /// The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
        /// </summary>
        [Input("minPriorityPerJob")]
        public Input<int>? MinPriorityPerJob { get; set; }

        /// <summary>
        /// The AAD object identifier for the entity to create a policy for.
        /// </summary>
        [Input("objectId", required: true)]
        public Input<string> ObjectId { get; set; } = null!;

        /// <summary>
        /// The type of AAD object the object identifier refers to.
        /// </summary>
        [Input("objectType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.DataLakeAnalytics.Latest.AADObjectType> ObjectType { get; set; } = null!;

        /// <summary>
        /// The name of the Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ComputePolicyArgs()
        {
        }
    }
}
