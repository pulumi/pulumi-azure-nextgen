// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.V20170401Preview.Outputs
{

    [OutputType]
    public sealed class ScalarFunctionPropertiesResponse
    {
        /// <summary>
        /// The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
        /// </summary>
        public readonly Union<Outputs.AzureMachineLearningServiceFunctionBindingResponse, Union<Outputs.AzureMachineLearningStudioFunctionBindingResponse, Union<Outputs.CSharpFunctionBindingResponse, Outputs.JavaScriptFunctionBindingResponse>>>? Binding;
        /// <summary>
        /// The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
        /// </summary>
        public readonly string Etag;
        public readonly ImmutableArray<Outputs.FunctionInputResponse> Inputs;
        /// <summary>
        /// Describes the output of a function.
        /// </summary>
        public readonly Outputs.FunctionOutputResponse? Output;
        /// <summary>
        /// Indicates the type of function.
        /// Expected value is 'Scalar'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ScalarFunctionPropertiesResponse(
            Union<Outputs.AzureMachineLearningServiceFunctionBindingResponse, Union<Outputs.AzureMachineLearningStudioFunctionBindingResponse, Union<Outputs.CSharpFunctionBindingResponse, Outputs.JavaScriptFunctionBindingResponse>>>? binding,

            string etag,

            ImmutableArray<Outputs.FunctionInputResponse> inputs,

            Outputs.FunctionOutputResponse? output,

            string type)
        {
            Binding = binding;
            Etag = etag;
            Inputs = inputs;
            Output = output;
            Type = type;
        }
    }
}
