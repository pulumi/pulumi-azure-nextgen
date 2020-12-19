// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.Latest
{
    /// <summary>
    /// A streaming job object, containing all information associated with the named streaming job.
    /// Latest API Version: 2016-03-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:streamanalytics/latest:StreamingJob")]
    public partial class StreamingJob : Pulumi.CustomResource
    {
        /// <summary>
        /// Controls certain runtime behaviors of the streaming job.
        /// </summary>
        [Output("compatibilityLevel")]
        public Output<string?> CompatibilityLevel { get; private set; } = null!;

        /// <summary>
        /// Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created.
        /// </summary>
        [Output("createdDate")]
        public Output<string> CreatedDate { get; private set; } = null!;

        /// <summary>
        /// The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
        /// </summary>
        [Output("dataLocale")]
        public Output<string?> DataLocale { get; private set; } = null!;

        /// <summary>
        /// The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
        /// </summary>
        [Output("eventsLateArrivalMaxDelayInSeconds")]
        public Output<int?> EventsLateArrivalMaxDelayInSeconds { get; private set; } = null!;

        /// <summary>
        /// The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
        /// </summary>
        [Output("eventsOutOfOrderMaxDelayInSeconds")]
        public Output<int?> EventsOutOfOrderMaxDelayInSeconds { get; private set; } = null!;

        /// <summary>
        /// Indicates the policy to apply to events that arrive out of order in the input event stream.
        /// </summary>
        [Output("eventsOutOfOrderPolicy")]
        public Output<string?> EventsOutOfOrderPolicy { get; private set; } = null!;

        /// <summary>
        /// A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
        /// </summary>
        [Output("functions")]
        public Output<ImmutableArray<Outputs.FunctionResponse>> Functions { get; private set; } = null!;

        /// <summary>
        /// A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
        /// </summary>
        [Output("inputs")]
        public Output<ImmutableArray<Outputs.InputResponse>> Inputs { get; private set; } = null!;

        /// <summary>
        /// A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job.
        /// </summary>
        [Output("jobId")]
        public Output<string> JobId { get; private set; } = null!;

        /// <summary>
        /// Describes the state of the streaming job.
        /// </summary>
        [Output("jobState")]
        public Output<string> JobState { get; private set; } = null!;

        /// <summary>
        /// Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set.
        /// </summary>
        [Output("lastOutputEventTime")]
        public Output<string> LastOutputEventTime { get; private set; } = null!;

        /// <summary>
        /// Resource location. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
        /// </summary>
        [Output("outputErrorPolicy")]
        public Output<string?> OutputErrorPolicy { get; private set; } = null!;

        /// <summary>
        /// This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
        /// </summary>
        [Output("outputStartMode")]
        public Output<string?> OutputStartMode { get; private set; } = null!;

        /// <summary>
        /// Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
        /// </summary>
        [Output("outputStartTime")]
        public Output<string?> OutputStartTime { get; private set; } = null!;

        /// <summary>
        /// A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
        /// </summary>
        [Output("outputs")]
        public Output<ImmutableArray<Outputs.OutputResponse>> Outputs { get; private set; } = null!;

        /// <summary>
        /// Describes the provisioning status of the streaming job.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
        /// </summary>
        [Output("transformation")]
        public Output<Outputs.TransformationResponse?> Transformation { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a StreamingJob resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public StreamingJob(string name, StreamingJobArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:streamanalytics/latest:StreamingJob", name, args ?? new StreamingJobArgs(), MakeResourceOptions(options, ""))
        {
        }

        private StreamingJob(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:streamanalytics/latest:StreamingJob", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:streamanalytics/v20160301:StreamingJob"},
                    new Pulumi.Alias { Type = "azure-nextgen:streamanalytics/v20170401preview:StreamingJob"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing StreamingJob resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static StreamingJob Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new StreamingJob(name, id, options);
        }
    }

    public sealed class StreamingJobArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Controls certain runtime behaviors of the streaming job.
        /// </summary>
        [Input("compatibilityLevel")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.Latest.CompatibilityLevel>? CompatibilityLevel { get; set; }

        /// <summary>
        /// The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
        /// </summary>
        [Input("dataLocale")]
        public Input<string>? DataLocale { get; set; }

        /// <summary>
        /// The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
        /// </summary>
        [Input("eventsLateArrivalMaxDelayInSeconds")]
        public Input<int>? EventsLateArrivalMaxDelayInSeconds { get; set; }

        /// <summary>
        /// The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
        /// </summary>
        [Input("eventsOutOfOrderMaxDelayInSeconds")]
        public Input<int>? EventsOutOfOrderMaxDelayInSeconds { get; set; }

        /// <summary>
        /// Indicates the policy to apply to events that arrive out of order in the input event stream.
        /// </summary>
        [Input("eventsOutOfOrderPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.Latest.EventsOutOfOrderPolicy>? EventsOutOfOrderPolicy { get; set; }

        [Input("functions")]
        private InputList<Inputs.FunctionArgs>? _functions;

        /// <summary>
        /// A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
        /// </summary>
        public InputList<Inputs.FunctionArgs> Functions
        {
            get => _functions ?? (_functions = new InputList<Inputs.FunctionArgs>());
            set => _functions = value;
        }

        [Input("inputs")]
        private InputList<Inputs.InputArgs>? _inputs;

        /// <summary>
        /// A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
        /// </summary>
        public InputList<Inputs.InputArgs> Inputs
        {
            get => _inputs ?? (_inputs = new InputList<Inputs.InputArgs>());
            set => _inputs = value;
        }

        /// <summary>
        /// The name of the streaming job.
        /// </summary>
        [Input("jobName", required: true)]
        public Input<string> JobName { get; set; } = null!;

        /// <summary>
        /// Resource location. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
        /// </summary>
        [Input("outputErrorPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.Latest.OutputErrorPolicy>? OutputErrorPolicy { get; set; }

        /// <summary>
        /// This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
        /// </summary>
        [Input("outputStartMode")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.Latest.OutputStartMode>? OutputStartMode { get; set; }

        /// <summary>
        /// Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
        /// </summary>
        [Input("outputStartTime")]
        public Input<string>? OutputStartTime { get; set; }

        [Input("outputs")]
        private InputList<Inputs.OutputArgs>? _outputs;

        /// <summary>
        /// A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
        /// </summary>
        public InputList<Inputs.OutputArgs> Outputs
        {
            get => _outputs ?? (_outputs = new InputList<Inputs.OutputArgs>());
            set => _outputs = value;
        }

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.SkuArgs>? Sku { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
        /// </summary>
        [Input("transformation")]
        public Input<Inputs.TransformationArgs>? Transformation { get; set; }

        public StreamingJobArgs()
        {
        }
    }
}
