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
    public sealed class CSharpFunctionBindingResponse
    {
        /// <summary>
        /// The Csharp code containing a single function definition.
        /// </summary>
        public readonly string? Class;
        /// <summary>
        /// The Csharp code containing a single function definition.
        /// </summary>
        public readonly string? DllPath;
        /// <summary>
        /// The Csharp code containing a single function definition.
        /// </summary>
        public readonly string? Method;
        /// <summary>
        /// The Csharp code containing a single function definition.
        /// </summary>
        public readonly string? Script;
        /// <summary>
        /// Indicates the function binding type.
        /// Expected value is 'Microsoft.StreamAnalytics/CLRUdf'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private CSharpFunctionBindingResponse(
            string? @class,

            string? dllPath,

            string? method,

            string? script,

            string type)
        {
            Class = @class;
            DllPath = dllPath;
            Method = method;
            Script = script;
            Type = type;
        }
    }
}
