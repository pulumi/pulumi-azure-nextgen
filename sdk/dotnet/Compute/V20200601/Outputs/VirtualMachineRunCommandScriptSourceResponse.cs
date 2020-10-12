// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20200601.Outputs
{

    [OutputType]
    public sealed class VirtualMachineRunCommandScriptSourceResponse
    {
        /// <summary>
        /// Specifies a commandId of predefined built-in script.
        /// </summary>
        public readonly string? CommandId;
        /// <summary>
        /// Specifies the script content to be executed on the VM.
        /// </summary>
        public readonly string? Script;
        /// <summary>
        /// Specifies the script download location.
        /// </summary>
        public readonly string? ScriptUri;

        [OutputConstructor]
        private VirtualMachineRunCommandScriptSourceResponse(
            string? commandId,

            string? script,

            string? scriptUri)
        {
            CommandId = commandId;
            Script = script;
            ScriptUri = scriptUri;
        }
    }
}
