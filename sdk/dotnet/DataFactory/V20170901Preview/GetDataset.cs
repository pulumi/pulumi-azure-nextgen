// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview
{
    public static class GetDataset
    {
        public static Task<GetDatasetResult> InvokeAsync(GetDatasetArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDatasetResult>("azure-nextgen:datafactory/v20170901preview:getDataset", args ?? new GetDatasetArgs(), options.WithVersion());
    }


    public sealed class GetDatasetArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The dataset name.
        /// </summary>
        [Input("datasetName", required: true)]
        public string DatasetName { get; set; } = null!;

        /// <summary>
        /// The factory name.
        /// </summary>
        [Input("factoryName", required: true)]
        public string FactoryName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDatasetArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDatasetResult
    {
        /// <summary>
        /// Etag identifies change in the resource.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Dataset properties.
        /// </summary>
        public readonly Union<Outputs.AmazonMWSObjectDatasetResponse, Union<Outputs.AmazonS3DatasetResponse, Union<Outputs.AzureBlobDatasetResponse, Union<Outputs.AzureDataLakeStoreDatasetResponse, Union<Outputs.AzureMySqlTableDatasetResponse, Union<Outputs.AzurePostgreSqlTableDatasetResponse, Union<Outputs.AzureSearchIndexDatasetResponse, Union<Outputs.AzureSqlDWTableDatasetResponse, Union<Outputs.AzureSqlTableDatasetResponse, Union<Outputs.AzureTableDatasetResponse, Union<Outputs.CassandraTableDatasetResponse, Union<Outputs.ConcurObjectDatasetResponse, Union<Outputs.CouchbaseTableDatasetResponse, Union<Outputs.CustomDatasetResponse, Union<Outputs.DocumentDbCollectionDatasetResponse, Union<Outputs.DrillTableDatasetResponse, Union<Outputs.DynamicsEntityDatasetResponse, Union<Outputs.EloquaObjectDatasetResponse, Union<Outputs.FileShareDatasetResponse, Union<Outputs.GoogleBigQueryObjectDatasetResponse, Union<Outputs.GreenplumTableDatasetResponse, Union<Outputs.HBaseObjectDatasetResponse, Union<Outputs.HiveObjectDatasetResponse, Union<Outputs.HttpDatasetResponse, Union<Outputs.HubspotObjectDatasetResponse, Union<Outputs.ImpalaObjectDatasetResponse, Union<Outputs.JiraObjectDatasetResponse, Union<Outputs.MagentoObjectDatasetResponse, Union<Outputs.MariaDBTableDatasetResponse, Union<Outputs.MarketoObjectDatasetResponse, Union<Outputs.MongoDbCollectionDatasetResponse, Union<Outputs.NetezzaTableDatasetResponse, Union<Outputs.ODataResourceDatasetResponse, Union<Outputs.OracleTableDatasetResponse, Union<Outputs.PaypalObjectDatasetResponse, Union<Outputs.PhoenixObjectDatasetResponse, Union<Outputs.PrestoObjectDatasetResponse, Union<Outputs.QuickBooksObjectDatasetResponse, Union<Outputs.RelationalTableDatasetResponse, Union<Outputs.ResponsysObjectDatasetResponse, Union<Outputs.SalesforceMarketingCloudObjectDatasetResponse, Union<Outputs.SalesforceObjectDatasetResponse, Union<Outputs.SapCloudForCustomerResourceDatasetResponse, Union<Outputs.SapEccResourceDatasetResponse, Union<Outputs.ServiceNowObjectDatasetResponse, Union<Outputs.ShopifyObjectDatasetResponse, Union<Outputs.SparkObjectDatasetResponse, Union<Outputs.SqlServerTableDatasetResponse, Union<Outputs.SquareObjectDatasetResponse, Union<Outputs.VerticaTableDatasetResponse, Union<Outputs.WebTableDatasetResponse, Union<Outputs.XeroObjectDatasetResponse, Outputs.ZohoObjectDatasetResponse>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Properties;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDatasetResult(
            string etag,

            string id,

            string name,

            Union<Outputs.AmazonMWSObjectDatasetResponse, Union<Outputs.AmazonS3DatasetResponse, Union<Outputs.AzureBlobDatasetResponse, Union<Outputs.AzureDataLakeStoreDatasetResponse, Union<Outputs.AzureMySqlTableDatasetResponse, Union<Outputs.AzurePostgreSqlTableDatasetResponse, Union<Outputs.AzureSearchIndexDatasetResponse, Union<Outputs.AzureSqlDWTableDatasetResponse, Union<Outputs.AzureSqlTableDatasetResponse, Union<Outputs.AzureTableDatasetResponse, Union<Outputs.CassandraTableDatasetResponse, Union<Outputs.ConcurObjectDatasetResponse, Union<Outputs.CouchbaseTableDatasetResponse, Union<Outputs.CustomDatasetResponse, Union<Outputs.DocumentDbCollectionDatasetResponse, Union<Outputs.DrillTableDatasetResponse, Union<Outputs.DynamicsEntityDatasetResponse, Union<Outputs.EloquaObjectDatasetResponse, Union<Outputs.FileShareDatasetResponse, Union<Outputs.GoogleBigQueryObjectDatasetResponse, Union<Outputs.GreenplumTableDatasetResponse, Union<Outputs.HBaseObjectDatasetResponse, Union<Outputs.HiveObjectDatasetResponse, Union<Outputs.HttpDatasetResponse, Union<Outputs.HubspotObjectDatasetResponse, Union<Outputs.ImpalaObjectDatasetResponse, Union<Outputs.JiraObjectDatasetResponse, Union<Outputs.MagentoObjectDatasetResponse, Union<Outputs.MariaDBTableDatasetResponse, Union<Outputs.MarketoObjectDatasetResponse, Union<Outputs.MongoDbCollectionDatasetResponse, Union<Outputs.NetezzaTableDatasetResponse, Union<Outputs.ODataResourceDatasetResponse, Union<Outputs.OracleTableDatasetResponse, Union<Outputs.PaypalObjectDatasetResponse, Union<Outputs.PhoenixObjectDatasetResponse, Union<Outputs.PrestoObjectDatasetResponse, Union<Outputs.QuickBooksObjectDatasetResponse, Union<Outputs.RelationalTableDatasetResponse, Union<Outputs.ResponsysObjectDatasetResponse, Union<Outputs.SalesforceMarketingCloudObjectDatasetResponse, Union<Outputs.SalesforceObjectDatasetResponse, Union<Outputs.SapCloudForCustomerResourceDatasetResponse, Union<Outputs.SapEccResourceDatasetResponse, Union<Outputs.ServiceNowObjectDatasetResponse, Union<Outputs.ShopifyObjectDatasetResponse, Union<Outputs.SparkObjectDatasetResponse, Union<Outputs.SqlServerTableDatasetResponse, Union<Outputs.SquareObjectDatasetResponse, Union<Outputs.VerticaTableDatasetResponse, Union<Outputs.WebTableDatasetResponse, Union<Outputs.XeroObjectDatasetResponse, Outputs.ZohoObjectDatasetResponse>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> properties,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
