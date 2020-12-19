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
    public sealed class JavaScriptFunctionBindingResponse
    {
        /// <summary>
        /// The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
        /// </summary>
        public readonly string? Script;
        /// <summary>
        /// Indicates the function binding type.
        /// Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private JavaScriptFunctionBindingResponse(
            string? script,

            string type)
        {
            Script = script;
            Type = type;
        }
    }
}
