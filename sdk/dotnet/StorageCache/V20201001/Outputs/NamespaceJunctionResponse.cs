// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.V20201001.Outputs
{

    [OutputType]
    public sealed class NamespaceJunctionResponse
    {
        /// <summary>
        /// Namespace path on a Cache for a Storage Target.
        /// </summary>
        public readonly string? NamespacePath;
        /// <summary>
        /// Name of the access policy applied to this junction.
        /// </summary>
        public readonly string? NfsAccessPolicy;
        /// <summary>
        /// NFS export where targetPath exists.
        /// </summary>
        public readonly string? NfsExport;
        /// <summary>
        /// Path in Storage Target to which namespacePath points.
        /// </summary>
        public readonly string? TargetPath;

        [OutputConstructor]
        private NamespaceJunctionResponse(
            string? namespacePath,

            string? nfsAccessPolicy,

            string? nfsExport,

            string? targetPath)
        {
            NamespacePath = namespacePath;
            NfsAccessPolicy = nfsAccessPolicy;
            NfsExport = nfsExport;
            TargetPath = targetPath;
        }
    }
}