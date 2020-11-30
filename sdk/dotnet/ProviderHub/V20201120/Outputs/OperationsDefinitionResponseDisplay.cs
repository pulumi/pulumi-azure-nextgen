// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120.Outputs
{

    [OutputType]
    public sealed class OperationsDefinitionResponseDisplay
    {
        public readonly string Description;
        public readonly string Operation;
        public readonly string Provider;
        public readonly string Resource;

        [OutputConstructor]
        private OperationsDefinitionResponseDisplay(
            string description,

            string operation,

            string provider,

            string resource)
        {
            Description = description;
            Operation = operation;
            Provider = provider;
            Resource = resource;
        }
    }
}
